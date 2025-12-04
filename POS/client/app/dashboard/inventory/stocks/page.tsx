import Header from "@/components/Navigation/Header";

export default function Stocks() {
  return (
    <div>
      <Header
        crumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Stock Management" }]}
      />
      <div>Stock Management</div>
    </div>
  );
}
