import Header from "@/components/Navigation/Header";

export default function AdminControl() {
  return (
    <div>
      <Header
        crumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Admin Management" }]}
      />
      <div>Admin Management</div>
    </div>
  );
}
