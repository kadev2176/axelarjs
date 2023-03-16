import { FC, useCallback, useEffect, useState } from "react";

import clsx from "clsx";
import { Moon, Sun } from "lucide-react";

export const VALID_THEMES = ["light", "dark"] as const;

export type ThemeKind = (typeof VALID_THEMES)[number];

export function isValidTheme(theme: string): theme is ThemeKind {
  // rome-ignore lint/suspicious/noExplicitAny: avoid union type mismatch
  return VALID_THEMES.includes(theme as any);
}

function persistTheme(theme: ThemeKind) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

export type ThemeSwitcherProps = {};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const [theme, setTheme] = useState<ThemeKind | null>(null);

  useEffect(() => {
    if (theme) {
      persistTheme(theme);
      return;
    }

    const persistedTheme = localStorage.getItem("theme");

    const defaultTheme =
      persistedTheme && isValidTheme(persistedTheme) ? persistedTheme : "light";

    setTheme(defaultTheme);
  }, [theme]);

  const handleToggleTheme = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>) => {
      const target = evt.target as HTMLElement;

      const [primaryTheme, secondaryTheme] =
        target.dataset.toggleTheme?.split(",") ?? [];

      const currentTheme = document.documentElement.getAttribute("data-theme");

      if (!(isValidTheme(primaryTheme) && isValidTheme(secondaryTheme))) {
        console.warn(
          `Invalid theme data: ${primaryTheme}, ${secondaryTheme}. Expected "light" or "dark".`
        );
        return;
      }

      const nextTheme =
        currentTheme === primaryTheme ? secondaryTheme : primaryTheme;

      setTheme(nextTheme);
    },
    []
  );

  return (
    <button
      data-toggle-theme={VALID_THEMES.join(",")}
      onClick={handleToggleTheme}
      className={clsx("swap swap-rotate", {
        "swap-active": theme === "dark",
      })}
    >
      <span className="swap-on pointer-events-none">
        <Sun className="h-6 w-6" />
      </span>
      <span className="swap-off pointer-events-none">
        <Moon className="h-6 w-6" />
      </span>
    </button>
  );
};
