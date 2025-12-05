"use client";

import * as React from "react";
import ChartCard from "./ChartCard";
import ListCard from "./ListCard";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

type PopularItem = { name: string; sold: number; revenue: number; trend: number };

export function PopularItemsCard({ items, loading }: { items?: PopularItem[]; loading?: boolean }) {
  return (
    <ListCard
      title="Popular Items"
      loading={loading}
      items={items}
      renderItem={(item: PopularItem, i: number) => (
        <div className={cn("flex items-center justify-between p-3 rounded-lg bg-muted/50")}>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-muted-foreground">#{i + 1}</span>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.sold} units sold</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-primary">${item.revenue.toFixed(2)}</p>
            <Badge
              variant={item.trend > 0 ? "default" : "secondary"}
              className={item.trend > 0 ? "bg-success text-success-foreground text-xs" : "text-xs"}
            >
              {item.trend > 0 ? (
                <TrendingUp className="h-3 w-3 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 mr-1" />
              )}
              {Math.abs(item.trend)}%
            </Badge>
          </div>
        </div>
      )}
    />
  );
}

type StockMovement = { type: string; item: string; quantity: number; date: string };

export function StockMovementsCard({
  items,
  loading,
}: {
  items?: StockMovement[];
  loading?: boolean;
}) {
  return (
    <ListCard
      title="Stock Movements"
      loading={loading}
      items={items}
      renderItem={(movement: StockMovement) => (
        <div className="flex items-center justify-between p-3 rounded-lg border">
          <div className="flex items-center gap-3">
            <Badge
              variant={movement.type === "In" ? "default" : "secondary"}
              className={
                movement.type === "In"
                  ? "bg-success text-success-foreground"
                  : "bg-accent text-accent-foreground"
              }
            >
              {movement.type}
            </Badge>
            <div>
              <p className="font-medium">{movement.item}</p>
              <p className="text-xs text-muted-foreground">{movement.date}</p>
            </div>
          </div>
          <span className="font-bold">{movement.quantity} units</span>
        </div>
      )}
    />
  );
}

type Delivery = {
  id: string;
  supplier: string;
  items: number;
  status: string;
  date: string;
  icon?: React.ReactNode;
};

export function DeliveriesCard({
  deliveries,
  loading,
}: {
  deliveries?: Delivery[];
  loading?: boolean;
}) {
  return (
    <ListCard
      title="Material Deliveries"
      loading={loading}
      items={deliveries}
      renderItem={(delivery: Delivery) => (
        <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 text-primary">{delivery.icon}</div>
            <div>
              <p className="font-semibold">
                {delivery.id} - {delivery.supplier}
              </p>
              <p className="text-sm text-muted-foreground">
                {delivery.items} items • Expected: {delivery.date}
              </p>
            </div>
          </div>
          <Badge
            variant={
              delivery.status === "Delivered"
                ? "default"
                : delivery.status === "In Transit"
                ? "secondary"
                : "outline"
            }
            className={
              delivery.status === "Delivered"
                ? "bg-success text-success-foreground"
                : delivery.status === "In Transit"
                ? "bg-accent text-accent-foreground"
                : ""
            }
          >
            {delivery.status}
          </Badge>
        </div>
      )}
    />
  );
}

export function RevenueChartCard({
  title,
  children,
  loading,
}: {
  title?: string;
  children?: React.ReactNode;
  loading?: boolean;
}) {
  return (
    <ChartCard title={title} loading={!!loading}>
      {children}
    </ChartCard>
  );
}
