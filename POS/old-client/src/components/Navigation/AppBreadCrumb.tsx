"use client";

import * as React from "react";
import { Link as MuiLink, Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NextLink from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export interface CrumbList {
  crumbs: Crumb[];
}

export default function AppBreadcrumbs({ crumbs }: CrumbList) {
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {crumbs.map((crumb, index) =>
        crumb.href && index !== crumbs.length - 1 ? (
          <MuiLink
            component={NextLink}
            key={index}
            color="inherit"
            href={crumb.href}
            underline="hover"
          >
            {crumb.label}
          </MuiLink>
        ) : (
          <Typography key={index} color="text.primary">
            {crumb.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
}
