"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ChartCard({
  title,
  subtitle,
  children,
  loading = false,
  className,
}: {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  loading?: boolean;
  className?: string;
}) {
  return (
    <Card className={cn(className)}>
      {(title || subtitle) && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {subtitle && <div className="text-xs text-muted-foreground">{subtitle}</div>}
        </CardHeader>
      )}

      <CardContent>
        {loading ? (
          <div className="h-[300px] animate-pulse rounded-md bg-muted/30" />
        ) : (
          <div className="h-[300px]">{children}</div>
        )}
      </CardContent>
    </Card>
  );
}
