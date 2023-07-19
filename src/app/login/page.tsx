import { Metadata } from "next";
import LoginForm from "./components/LoginForm";
import ActionContainer from "../UI/ActionsContainer/ActionContainer";
import ActionInformation from "../UI/ActionInformation/ActionInformation";

export const metadata: Metadata = {
  title: "Login",
  description: "This is login page",
};

export default function Login() {
  return (
    <ActionContainer>
      <ActionInformation mainTitle="Welcome Back" message="Log in !" />
      <LoginForm />
    </ActionContainer>
  );
}
