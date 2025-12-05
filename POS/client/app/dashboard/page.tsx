import RecentActivity from "@/components/cards/RecentActivity";
import LowStockAlerts from "@/components/cards/LowStockAlerts";
import { KpiCard } from "@/components/cards/KpiCard";
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Navigation/Header";
import { DollarSign, Package } from "lucide-react";

const recentActivityItems = [
  {
    id: 1,
    status: "order" as const,
    name: "Wai Hlyan Phyo",
    oid: "327",
    time: "1 hours ago",
  },
  {
    id: 2,
    status: "processing" as const,
    oid: "325",
    admin: "Admin Two",
    time: "3 hours ago",
  },
  {
    id: 3,
    status: "shipping" as const,
    oid: "323",
    admin: "Admin One",
    time: "4 hours ago",
  },
  {
    id: 4,
    status: "delivered" as const,
    oid: "315",
    admin: "Admin Two",
    time: "2 hours ago",
  },
  {
    id: 5,
    status: "canceled" as const,
    uid: "Mg Mg",
    oid: "314",
    time: "4 hours ago",
  },
  // {
  //   id: 5,
  //   status: "canceled" as const,
  //   admin: "Admin One",
  //   oid: "312",
  //   time: "4 hours ago",
  // },
  // {
  //   id: 6,
  //   status: "comment" as const,
  //   name: "John Doe",
  //   pid: "1320",
  //   time: "5 hours ago",
  // },
  // {
  //   id: 7,
  //   status: "review" as const,
  //   name: "Ye Htut Ko Ko",
  //   pid: "1429",
  //   time: "4 hours ago",
  // },
  // {
  //   id: 8,
  //   status: "suspend" as const,
  //   name: "Oliver",
  //   admin: "Admin One",
  //   time: "5 hours ago",
  // },
  // {
  //   id: 9,
  //   status: "stock_arrived" as const,
  //   name: "TechSupply Co",
  //   did: "43",
  //   time: "1 hour ago",
  // },
];

const lowStockItems = [
  {
    id: 1,
    icon: <Package className="h-5 w-5 text-warning" />,
    label: "Wireless Mouse",
    description: "Only 1 left",
    action: "Restock",
  },
  {
    id: 2,
    icon: <Package className="h-5 w-5 text-warning" />,
    label: "USB Cable",
    description: "Only 3 left",
    action: "Restock",
  },
  {
    id: 3,
    icon: <Package className="h-5 w-5 text-warning" />,
    label: "Keyboard",
    description: "Only 1 left",
    action: "Restock",
  },
  {
    id: 4,
    icon: <Package className="h-5 w-5 text-warning" />,
    label: "Monitor Stand",
    description: "Only 4 left",
    action: "Restock",
  },
];

export default function DashBoardHome() {
  return (
    <div>
      <Header crumbs={[{ label: "Dashboard" }]} />
      <MainContainer className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold">Overview</h1>
          <p className="text-muted-foreground">Real-time metrics and recent activity</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
          <KpiCard
            info={{
              label: "Total Profit",
              amount: "54,200 mmk",
              icon: DollarSign,
              status: "+18.2% today",
              trending: 1,
            }}
          />
          <KpiCard
            info={{
              label: "Total Sales",
              amount: "1,240,500 mmk",
              icon: DollarSign,
              status: "-6.3% today",
              trending: 0,
            }}
          />
          <KpiCard
            info={{
              label: "Total Orders",
              amount: "16",
              icon: DollarSign,
              status: "+16% today",
              trending: 1,
            }}
          />
          <KpiCard
            info={{
              label: "Active Users",
              amount: "10",
              icon: DollarSign,
              status: "+20% today",
              trending: 1,
            }}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <RecentActivity items={recentActivityItems} />
          <LowStockAlerts items={lowStockItems} />
        </div>
      </MainContainer>
    </div>
  );
}
