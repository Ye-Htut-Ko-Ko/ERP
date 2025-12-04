import Header from "@/components/Navigation/Header";

export default function Orders() {
  return (
    <div>
      <Header crumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Orders" }]} />
      <div>Orders Page</div>
    </div>
  );
}
