"use client";

import React from "react";
import {
  ShoppingCart,
  PackageOpen,
  Truck,
  PackageCheck,
  X,
  Star,
  MessageCircle,
  Clock,
  Warehouse,
  Ban,
} from "lucide-react";
import ActivityCard from "./ActivityCard";

type ActivityStatus =
  | "order"
  | "processing"
  | "shipping"
  | "delivered"
  | "canceled"
  | "review"
  | "comment"
  | "suspend"
  | "stock_arrived";

type ActivityItemInput = {
  id: number | string;
  status: ActivityStatus;
  // only these fields are expected from callers
  name?: string; // customer or supplier name
  admin?: string; // admin/user who performed action
  uid?: string; // user id
  pid?: string; // product id
  did?: string; // delivery id
  oid?: string; // order id
  time?: string; // e.g. "2 hours ago"
};

type ActivityItem = {
  id: number | string;
  icon: React.ReactNode;
  label: React.ReactNode;
  description: React.ReactNode;
  action: React.ReactNode;
};

type RecentActivityProps = {
  items: ActivityItemInput[];
};

const statusIconMap: Record<ActivityStatus, React.ReactNode> = {
  order: <ShoppingCart className="h-5 w-5 text-primary" />,
  processing: <PackageOpen className="h-5 w-5 text-blue-500" />,
  shipping: <Truck className="h-5 w-5 text-orange-500" />,
  delivered: <PackageCheck className="h-5 w-5 text-green-500" />,
  canceled: <X className="h-5 w-5 text-red-500" />,
  review: <Star className="h-5 w-5 text-yellow-500" />,
  comment: <MessageCircle className="h-5 w-5 text-purple-500" />,
  suspend: <Ban className="h-5 w-5 text-gray-500" />,
  stock_arrived: <Warehouse className="h-5 w-5 text-success" />,
};

// Templates: build the label/action/description from the limited input fields
const RecentActivity = ({ items }: RecentActivityProps) => {
  const mappedItems: ActivityItem[] = items.map((it) => {
    const time = it.time ?? "just now";
    // description should include time and admin (if present)
    const adminPart = it.admin ? ` • ${it.admin}` : "";
    let description = `${time}${adminPart}`;

    // const fmtOid = (oid?: string | number) => {
    //   if (!oid) return "";
    //   const s = String(oid);
    //   return s.startsWith("OID") || s.startsWith("#") ? s : `#${s}`;
    // };

    let label: React.ReactNode = null;
    let action: React.ReactNode = null;

    switch (it.status) {
      case "order":
        label = `Customer \"${it.name ?? "Unknown"}\" placed an order`;
        description += ` • OD-${it.oid ?? "Unknown"}`;
        break;
      case "processing":
        label = `Order #${it.oid} marked as processing`;
        break;
      case "shipping":
        label = `Order #${it.oid} marked as shipping`;
        break;
      case "delivered":
        label = `Order #${it.oid} marked as delivered`;
        break;
      case "canceled": {
        label = `Order ${it.oid} was canceled`;
        // show OID as action; who canceled is included in the description (admin or customer)
        description += `  ${it.uid ? `• Customer - ${it.uid}` : ""}`;

        break;
      }
      case "review":
        label = `Customer \"${it.name ?? "Unknown"}\" left a review`;
        description += ` • PD-${it.pid ?? "Unknown"}`;
        break;
      case "comment":
        label = `Customer \"${it.name ?? "Unknown"}\" left a comment`;
        description += ` • PD-${it.pid ?? "Unknown"}`;
        break;
      case "suspend":
        label = `Customer \"${it.name ?? "Unknown"}\" account suspended`;
        action = "";
        break;
      case "stock_arrived":
        label = `Stock arrived to warehouse from ${it.name ?? "Unknown"}`;
        description += ` • DID-${it.did ?? "Unknown"}`;

        break;
      default:
        label = it.name ?? "Activity";
        action = it.oid ?? "";
    }

    return {
      id: it.id,
      icon: statusIconMap[it.status],
      label,
      description,
      action,
    };
  });

  return <ActivityCard label="Recent Activity" items={mappedItems} />;
};

export default RecentActivity;
