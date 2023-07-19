import { Metadata } from "next";
import RegisterForm from "./components/RegisterForm";
import ActionContainer from "../UI/ActionsContainer/ActionContainer";
import ActionInformation from "../UI/ActionInformation/ActionInformation";

export const metadata: Metadata = {
  title: "Register",
  description: "Register page",
};

export default function Register() {
  return (
    <ActionContainer>
      <ActionInformation mainTitle="Welcome" message="Sign up !" />
      <RegisterForm />
    </ActionContainer>
  );
}
