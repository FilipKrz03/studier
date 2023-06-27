import Providers from "@/context/Providers";
import ProgressBarPage from "../UI/ProgressBar/ProgressBar";
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
    <>
      <Providers>
        <ProgressBarPage />
        <div className="dashboard">
          <Panel />
          {children}
        </div>
      </Providers>
    </>
  );
}
