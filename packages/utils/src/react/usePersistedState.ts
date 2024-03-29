import { useEffect, useState } from "react";

import { produce, type Draft } from "immer";

import { Maybe } from "../monad";

export function usePersistedState<T>(
  storage: Storage,
  key: string,
  defaultValue: T
): readonly [T, (valueOrProducerFn: T | ((draft: Draft<T>) => void)) => void] {
  const [state, _setState] = useState<T>(() =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    Maybe.of(storage.getItem(key)).mapOr(defaultValue, JSON.parse)
  );

  useEffect(() => {
    storage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  /**
   * Set state with immer draft or value
   *
   * @param valueOrProducerFn
   */
  const setState = (valueOrProducerFn: T | ((draft: Draft<T>) => void)) => {
    if (typeof valueOrProducerFn === "function") {
      const producerFn = valueOrProducerFn as (draft: Draft<T>) => void;
      _setState(
        produce<T>((x) => {
          producerFn(x);
        })
      );
      return;
    }

    _setState(valueOrProducerFn);
  };

  return [state, setState];
}

export function useLocalStorageState<T>(key: string, defaultValue: T) {
  return usePersistedState(window.localStorage, key, defaultValue);
}

export function useSessionStorageState<T>(key: string, defaultValue: T) {
  return usePersistedState(window.sessionStorage, key, defaultValue);
}
