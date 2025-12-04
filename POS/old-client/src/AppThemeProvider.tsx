"use client";

import React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

const THEME_KEY = "theme";

function ThemeSync() {
  const { mode, setMode } = useColorScheme();

  // Sync document class and localStorage
  React.useEffect(() => {
    if (!mode) return;
    const isDark = mode === "dark";
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.add("mui-mode-dark");
      document.documentElement.classList.remove("mui-mode-light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("mui-mode-light");
      document.documentElement.classList.remove("mui-mode-dark");
    }
    try {
      localStorage.setItem(THEME_KEY, mode);
    } catch (err) {
      // ignore
    }
    // Keep MUI color scheme attribute for compatibility
    document.body.dataset.muiColorScheme = mode;
  }, [mode]);

  return null;
}

export default function AppThemeProvider({ children }: any) {
  const [initialMode, setInitialMode] = React.useState<"light" | "dark" | undefined>(undefined);

  React.useEffect(() => {
    // Read stored preference, or use system preference
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(THEME_KEY);
    } catch (err) {
      // ignore
    }

    if (stored === "light" || stored === "dark") {
      setInitialMode(stored as "light" | "dark");
      return;
    }

    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setInitialMode(prefersDark ? "dark" : "light");
  }, []);

  // Until we know the initial mode, don't render the provider to avoid flickering
  if (!initialMode) return <>{children}</>;

  return (
    <CssVarsProvider theme={theme as any} defaultMode={initialMode}>
      <ThemeProvider theme={theme}>
        <ThemeSync />
        {children}
      </ThemeProvider>
    </CssVarsProvider>
  );
}
