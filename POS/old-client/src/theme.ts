"use client";

import { createTheme } from "@mui/material/styles";

function hsl(variable: string) {
  return `hsl(var(${variable}))`;
}

// Create a single theme object with colorSchemes containing both light and dark
export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        background: {
          default: hsl("--background"),
          paper: hsl("--card"),
        },
        text: {
          primary: hsl("--foreground"),
          secondary: hsl("--muted-foreground"),
        },
        primary: {
          main: hsl("--primary"),
          contrastText: hsl("--primary-foreground"),
        },
        secondary: {
          main: hsl("--secondary"),
          contrastText: hsl("--secondary-foreground"),
        },
        error: { main: hsl("--destructive") },
        success: { main: hsl("--success") },
        warning: { main: hsl("--warning") },
        info: { main: hsl("--accent") },
        divider: hsl("--border"),
      },
    },
    dark: {
      palette: {
        mode: "dark",
        background: {
          default: hsl("--background"),
          paper: hsl("--card"),
        },
        text: {
          primary: hsl("--foreground"),
          secondary: hsl("--muted-foreground"),
        },
        primary: {
          main: hsl("--primary"),
          contrastText: hsl("--primary-foreground"),
        },
        secondary: {
          main: hsl("--secondary"),
          contrastText: hsl("--secondary-foreground"),
        },
        error: { main: hsl("--destructive") },
        success: { main: hsl("--success") },
        warning: { main: hsl("--warning") },
        info: { main: hsl("--accent") },
        divider: hsl("--border"),
      },
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export type ThemeType = typeof theme;
