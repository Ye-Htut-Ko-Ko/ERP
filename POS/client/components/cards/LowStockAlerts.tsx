"use client";

import React from "react";
import ActivityCard from "./ActivityCard";

type ActivityItem = {
  id: number | string;
  icon: React.ReactNode;
  label: React.ReactNode;
  description: React.ReactNode;
  action: React.ReactNode;
};

type LowStockAlertsProps = {
  items: ActivityItem[];
};

const LowStockAlerts = ({ items }: LowStockAlertsProps) => {
  return <ActivityCard label="Low Stock Alerts" items={items} variant="warning" />;
};

export default LowStockAlerts;
