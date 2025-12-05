"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type ActivityItem = {
  id: number | string;
  icon: React.ReactNode;
  label: React.ReactNode;
  description: React.ReactNode;
  action: React.ReactNode;
};

type ActivityCardProps = {
  label: string;
  items: ActivityItem[];
  variant?: "default" | "warning";
};

const ActivityCard = ({ label, items, variant = "default" }: ActivityCardProps) => {
  const isWarning = variant === "warning";

  return (
    <Card>
      <CardHeader>
        <CardTitle>{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-4 p-3 rounded-lg ${
                isWarning ? "bg-warning/10 border border-warning/20" : "bg-muted/50"
              }`}
            >
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
              <span className="text-sm font-semibold">{item.action}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
