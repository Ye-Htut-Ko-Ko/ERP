import Header from "@/components/Navigation/Header";

export default function OrderManagement() {
  return (
    <div>
      <Header
        crumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Orders Management" }]}
      />
      <div>Orders Management</div>
    </div>
  );
}
