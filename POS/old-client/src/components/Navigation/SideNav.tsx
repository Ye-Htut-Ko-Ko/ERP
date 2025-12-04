"use client";

import * as React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  Divider,
  Typography,
  useTheme,
  Tooltip,
} from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../icons/Logo";
import { ShoppingCartOutlined, SpaceDashboardOutlined, Trolley } from "@mui/icons-material";

const expandedWidth = 240;
const collapsedWidth = 60;

const menuItems = [
  { label: "Dashboard", icon: DashboardOutlinedIcon, href: "/dashboard" },
  { label: "POS", icon: ShoppingCartOutlined, href: "/dashboard/pos" },
  { label: "Users Control", icon: SettingsOutlinedIcon, href: "/dashboard/users-control" },
];

export default function SideNav() {
  const theme = useTheme();

  const pathname = usePathname();
  const [open, setOpen] = React.useState(true);
  const [hover, setHover] = React.useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <Drawer
      style={{ transition: "width 0.2s ease" }}
      variant="permanent"
      sx={{
        width: open ? expandedWidth : collapsedWidth,
        flexShrink: 0,
        border: 0,
        backgroundColor: "transparent",
        color: "hsl(var(--sidebar-foreground))",
        "& .MuiDrawer-paper": {
          width: open ? expandedWidth : collapsedWidth,
          boxSizing: "border-box",
          overflowX: "hidden",
          transition: "width 0.2s ease",
          backgroundColor: "hsl(var(--sidebar-background))",
          color: "hsl(var(--sidebar-foreground))",
          borderRight: `1px solid hsl(var(--sidebar-border))`,
        },
      }}
    >
      {/* Top area: Logo + Title + toggle button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          minWidth: "fit-content",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Logo + Title */}
        <Box sx={{ display: "flex", alignItems: "center", overflowX: "hidden" }}>
          <Logo
            size={36}
            style={{
              margin: "12px 0 12px 11px",
              minWidth: "36px",
            }}
          />
          {open && (
            <Box sx={{ minWidth: "fit-content", ml: 1 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Ion
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Development Group
              </Typography>
            </Box>
          )}
        </Box>

        {/* Single toggle icon (shown when expanded or hovered in collapsed) */}
        {(open || hover) && (
          <IconButton
            size="medium"
            onClick={toggleDrawer}
            sx={{
              transition: "transform 0.2s",
              borderRadius: "8px",
              position: "absolute",
              right: open ? 5 : 12,

              // Background logic
              bgcolor: !open
                ? theme.palette.mode === "dark"
                  ? theme.palette.grey[700]
                  : theme.palette.grey[300]
                : "transparent",

              "&:hover": {
                bgcolor:
                  theme.palette.mode === "dark" ? theme.palette.grey[700] : theme.palette.grey[300],
              },
            }}
          >
            <SpaceDashboardOutlined
              sx={{
                transition: "transform 0.2s",
                fontSize: "22px",
                color: theme.palette.text.primary,
              }}
            />
          </IconButton>
        )}
      </Box>

      <Divider />

      {/* Menu items */}
      <Box sx={{ mt: 1 }}>
        <List sx={{ msOverflowX: "hidden" }}>
          {menuItems.map((item) => {
            const active =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Tooltip key={item.href} title={!open ? item.label : ""} placement="right">
                <ListItemButton
                  component={Link}
                  href={item.href}
                  selected={active}
                  aria-current={active ? "page" : undefined}
                  sx={{
                    minHeight: 48,
                    px: 1.8,
                    justifyContent: open ? "initial" : "center",
                    // borderRadius: ,
                    transition: "background-color 0.15s ease, transform 0.15s ease",
                    ...(active && {
                      backgroundColor: "hsl(var(--primary) / 0.08)",
                      color: theme.palette.primary.contrastText,
                      boxShadow: `inset 4px 0 0 0 hsl(var(--primary))`,
                    }),
                    "&:hover": {
                      backgroundColor: "hsl(var(--primary) / 0.08)",
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 30,
                      justifyContent: "center",
                      color: active ? theme.palette.primary.main : theme.palette.text.primary,
                    }}
                  >
                    <Icon sx={{ fontSize: 18 }} />
                  </ListItemIcon>

                  {open && (
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: {
                          sx: {
                            fontSize: "0.9rem",
                            lineHeight: "0.9rem",
                            marginLeft: "4px",
                            fontWeight: 550,
                            color: active ? theme.palette.primary.main : theme.palette.text.primary,
                          },
                        },
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
