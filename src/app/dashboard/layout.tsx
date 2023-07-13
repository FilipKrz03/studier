import Panel from "./components/Panel/Panel";
import "./styles.scss";

export const metadata = {
  title: "Dashboard",
  description: "Studier Aplication",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      <Panel />
      <div className="container">
      {children}
      </div>
    </div>
  );
}
