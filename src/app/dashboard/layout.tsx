"use client";
import Panel from "./components/Panel/Panel";
import AuthChecker from "./components/AuthChecker";
import { Provider } from "react-redux";
import store from "./redux-store";
import "./styles.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <AuthChecker>
        <div className="dashboard">
          <Panel />
          <div className="container">{children}</div>
        </div>
      </AuthChecker>
    </Provider>
  );
}
