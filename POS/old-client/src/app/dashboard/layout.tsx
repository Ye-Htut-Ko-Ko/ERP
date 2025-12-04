"use client";
import SideNav from "@/components/Navigation/SideNav";
import { Container, Box } from "@mui/material";
import * as React from "react";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", transition: "width 2s ease" }}>
      <SideNav />
      <Container
        sx={{
          padding: " 8px 12px !important",
        }}
        maxWidth={false}
      >
        {props.children}
      </Container>
    </Box>
  );
}
