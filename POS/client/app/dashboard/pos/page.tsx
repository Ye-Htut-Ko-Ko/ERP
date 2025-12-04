import Header from "@/components/Navigation/Header";

export default function POS() {
  return (
    <div>
      <Header crumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "POS" }]} />
      <div>POS Page</div>
    </div>
  );
}
