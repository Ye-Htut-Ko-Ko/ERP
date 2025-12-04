"use client";
import { IconButton, useTheme } from "@mui/material";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import { useColorScheme } from "@mui/material/styles";

export default function ModeSwitch() {
  const theme = useTheme();
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <IconButton
      onClick={toggleMode}
      aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      size="small"
      sx={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        color: theme.palette.text.primary,
        bgcolor: theme.palette.background.paper,
        transition: "all 0.2s ease",
        "&:hover": {
          bgcolor: theme.palette.action.hover,
        },
      }}
    >
      {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
    </IconButton>
  );
}
