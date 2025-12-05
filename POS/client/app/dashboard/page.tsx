import RecentActivity from "@/components/cards/RecentActivity";
import LowStockAlerts from "@/components/cards/LowStockAlerts";
import { KpiCard } from "@/components/cards/KpiCard";
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Navigation/Header";
import { DollarSign, ShoppingCart, Package } from "lucide-react";

const recentActivityItems = [
  {
    id: 1,
    icon: <ShoppingCart className="h-5 w-5 text-primary" />,
    label: "Order #1001 completed",
    description: "1 hours ago",
    action: "$60.00",
  },
  {
    id: 2,
    icon: <ShoppingCart className="h-5 w-5 text-primary" />,
    label: "Order #1002 completed",
    description: "2 hours ago",
    action: "$70.00",
  },
  {
    id: 3,
    icon: <ShoppingCart className="h-5 w-5 text-primary" />,
    label: "Order #1003 completed",
    description: "3 hours ago",
    action: "$80.00",
  },
  {
    id: 4,
    icon: <ShoppingCart className="h-5 w-5 text-primary" />,
    label: "Order #1004 completed",
    description: "4 hours ago",
    action: "$90.00",
  },
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
    description: "Only 2 left",
    action: "Restock",
  },
  {
    id: 3,
    icon: <Package className="h-5 w-5 text-warning" />,
    label: "Keyboard",
    description: "Only 3 left",
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
      <MainContainer className="gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 mb-2 md:mb-4">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
          <RecentActivity items={recentActivityItems} />
          <LowStockAlerts items={lowStockItems} />
        </div>
      </MainContainer>
    </div>
  );
}
