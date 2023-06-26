import LoginForm from "./components/LoginForm";
import ActionContainer from "../UI/ActionsContainer/ActionContainer";
import ActionInformation from "../UI/ActionInformation/ActionInformation";

export default function Login() {

  return (
    <ActionContainer>
      <ActionInformation mainTitle="Welcome Back" message="Log in !" />
      <LoginForm />
    </ActionContainer>
  );
}
