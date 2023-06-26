import RegisterForm from "./components/RegisterForm";
import ActionContainer from "../UI/ActionsContainer/ActionContainer";
import ActionInformation from "../UI/ActionInformation/ActionInformation";

export default function Register() {

  return (
    <ActionContainer>
      <ActionInformation mainTitle="Welcome" message="Sign up !" />
      <RegisterForm />
    </ActionContainer>
  );
}
