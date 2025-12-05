"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ListCard<T>({
  title,
  items,
  renderItem,
  loading = false,
  className,
}: {
  title?: React.ReactNode;
  items?: T[];
  renderItem?: (item: T, idx: number) => React.ReactNode;
  loading?: boolean;
  className?: string;
}) {
  return (
    <Card className={cn(className)}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 animate-pulse rounded-md bg-muted/30" />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {items?.map((it, idx) => (
              <div key={idx}>{renderItem ? renderItem(it, idx) : JSON.stringify(it)}</div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
