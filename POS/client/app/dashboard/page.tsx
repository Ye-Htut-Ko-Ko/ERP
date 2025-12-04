import Header from "@/components/Navigation/Header";

export default function DashBoardHome() {
  return (
    <div>
      <Header crumbs={[{ label: "Dashboard" }]} />
      <div>Dashboard Home Page</div>
    </div>
  );
}
