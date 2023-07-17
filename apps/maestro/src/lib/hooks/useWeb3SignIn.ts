import { useEffect, useRef } from "react";
import { signIn, SignInResponse, useSession } from "next-auth/react";

import { useAccount } from "wagmi";

export type UseWeb3SignInOptions = {
  enabled: boolean;
  onSigninSuccess: (response?: SignInResponse) => void;
  onSigninError: (error: Error) => void;
};

const DEFAULT_OPTIONS: UseWeb3SignInOptions = {
  enabled: true,
  onSigninSuccess: () => {},
  onSigninError: () => {},
};

/**
 * A hook that signs in a user with their connected Web3 wallet.
 *
 * @param {UseWeb3SignInOptions} options - The options object.
 * @param {boolean} options.enabled - Whether the hook is enabled. Defaults to `true`.
 * @param {Function} options.onSigninSuccess - A callback function to run after successfully signing in. Defaults to `() => {}`.
 * @param {Function} options.onSigninError - A callback function to run if there is an error signing in. Defaults to `() => {}`.
 */
export function useWeb3SignIn({
  enabled,
  onSigninSuccess,
  onSigninError,
}: UseWeb3SignInOptions = DEFAULT_OPTIONS) {
  const { data: session, status: sessionStatus } = useSession();
  const { address } = useAccount();

  const isSigningInRef = useRef(false);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    if (sessionStatus === "loading") {
      return;
    }

    if (!address) {
      return;
    }

    if (session?.address === address) {
      return;
    }

    if (isSigningInRef.current) {
      return;
    }

    async function signInWithWeb3() {
      try {
        const response = await signIn("credentials", { address });
        onSigninSuccess(response);
        isSigningInRef.current = false;
      } catch (error) {
        if (error instanceof Error) {
          onSigninError(error);
        }
      }
    }

    isSigningInRef.current = true;
    signInWithWeb3();
  }, [
    session,
    address,
    sessionStatus,
    enabled,
    onSigninSuccess,
    onSigninError,
  ]);
}