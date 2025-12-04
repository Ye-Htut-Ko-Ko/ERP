import Header from "@/components/Navigation/Header";

export default function Store() {
  return (
    <div>
      <Header crumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Storefront" }]} />
      <div>Store Page</div>
    </div>
  );
}
