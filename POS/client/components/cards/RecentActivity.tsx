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

type RecentActivityProps = {
  items: ActivityItem[];
};

const RecentActivity = ({ items }: RecentActivityProps) => {
  return <ActivityCard label="Recent Activity" items={items} />;
};

export default RecentActivity;
