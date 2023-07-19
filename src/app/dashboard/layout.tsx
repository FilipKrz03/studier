import Panel from "./components/Panel/Panel";
import AuthChecker from "./components/AuthChecker";
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
    <AuthChecker>
    <div className="dashboard">
      <Panel />
      <div className="container">
      {children}
      </div>
    </div>
    </AuthChecker>
  );
}
