import Header from "@/components/Navigation/Header";

export default function CustomerControl() {
  return (
    <div>
      <Header
        crumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Customer Management" }]}
      />
      <div>Customer Management</div>
    </div>
  );
}
