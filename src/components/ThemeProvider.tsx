"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }
  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((resolved: ResolvedTheme) => {
    const root = document.documentElement;

    // Add transition class for smooth theme change
    root.classList.add("theme-transition");

    if (resolved === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Remove transition class after animation completes
    setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 300);

    setResolvedTheme(resolved);
  }, []);

  const resolveTheme = useCallback((t: Theme): ResolvedTheme => {
    if (t === "system") {
      return getSystemTheme();
    }
    return t;
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(resolveTheme(newTheme));
  }, [applyTheme, resolveTheme]);

  // Initialize theme on mount
  useEffect(() => {
    const stored = getStoredTheme();
    // Default to "dark" if no preference is stored
    const initialTheme = stored || "dark";
    // eslint-disable-next-line
    setThemeState(initialTheme);
    setResolvedTheme(resolveTheme(initialTheme));
    setMounted(true);
  }, [resolveTheme]);

  // Listen for system preference changes
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        applyTheme(getSystemTheme());
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, mounted, applyTheme]);

  // Prevent flash by not rendering until mounted
  // The FOUC script in layout.tsx handles initial state
  const value: ThemeContextType = {
    theme,
    resolvedTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
