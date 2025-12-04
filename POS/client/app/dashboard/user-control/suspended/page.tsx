import Header from "@/components/Navigation/Header";

export default function SuspendedUsers() {
  return (
    <div>
      <Header crumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Suspended Users" }]} />
      <div>Suspended Users</div>
    </div>
  );
}
