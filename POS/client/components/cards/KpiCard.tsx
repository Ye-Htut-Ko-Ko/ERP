import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp, type LucideIcon } from "lucide-react";

type Info = {
  label: string;
  amount: string;
  icon: LucideIcon;
  trending?: number;
  status?: string;
};

export function KpiCard({ info }: { info: Info }) {
  return (
    <Card className="@container/card gap-1.5 ">
      <CardHeader>
        <CardDescription className="flex gap-1.5 items-center text-foreground font-semibold text-md">
          {info.icon && <info.icon size={16} />} <p>{info.label}</p>
        </CardDescription>
        <CardTitle className="text-xl font-semibold tabular-nums @[250px]/card:text-2xl">
          {info.amount}
        </CardTitle>
      </CardHeader>
      {info.status && (
        <CardFooter
          className={`flex items-center gap-2 text-sm font-medium ${
            info.trending ? "text-success" : "text-destructive"
          }`}
        >
          {info.trending ? <TrendingUp size={15} /> : <TrendingDown size={15} />}
          <p className="font-medium text-sm">{info.status}</p>
        </CardFooter>
      )}
    </Card>
  );
}
