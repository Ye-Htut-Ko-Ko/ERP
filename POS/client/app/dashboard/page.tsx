import { SectionCard } from "@/components/cards/section-card";
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Navigation/Header";
import { DollarSign } from "lucide-react";

export default function DashBoardHome() {
  return (
    <div>
      <Header crumbs={[{ label: "Dashboard" }]} />
      <MainContainer className="gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 mb-2 md:mb-4">
          <SectionCard
            info={{
              label: "Total Profit",
              amount: "54,200 mmk",
              icon: DollarSign,
              status: "+18.2% today",
              trending: 1,
            }}
          />
          <SectionCard
            info={{
              label: "Total Sales",
              amount: "1,240,500 mmk",
              icon: DollarSign,
              status: "-6.3% today",
              trending: 0,
            }}
          />
          <SectionCard
            info={{
              label: "Total Orders",
              amount: "16",
              icon: DollarSign,
              status: "+16% today",
              trending: 1,
            }}
          />
          <SectionCard
            info={{
              label: "Active Users",
              amount: "10",
              icon: DollarSign,
              status: "+20% today",
              trending: 1,
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4">
          <SectionCard
            info={{
              label: "Total Profit",
              amount: "54,200 mmk",
              icon: DollarSign,
              status: "+18.2% today",
              trending: 1,
            }}
          />
          <SectionCard
            info={{
              label: "Total Sales",
              amount: "1,240,500 mmk",
              icon: DollarSign,
              status: "-6.3% today",
              trending: 0,
            }}
          />
          <SectionCard
            info={{
              label: "Total Orders",
              amount: "16",
              icon: DollarSign,
              status: "+16% today",
              trending: 1,
            }}
          />
          <SectionCard
            info={{
              label: "Active Users",
              amount: "10",
              icon: DollarSign,
              status: "+20% today",
              trending: 1,
            }}
          />
        </div>
      </MainContainer>
    </div>
  );
}
