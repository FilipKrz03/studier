"use client";
import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import ActionContainer from "../UI/ActionsContainer/ActionContainer";
import ActionInformation from "../UI/ActionInformation/ActionInformation";
import LoadingBody from "../UI/LoadingBody/LoadingBody";

export default function Register() {
  const [loading, setLoading] = useState(false);

  const loadingChangeHandler = (loadingStatus: boolean) => {
    setLoading(loadingStatus);
  };

  if (loading) {
    return <LoadingBody />;
  }

  return (
    <ActionContainer>
      <ActionInformation mainTitle="Welcome" message="Sign up !" />
      <RegisterForm onLoadingChange={loadingChangeHandler} />
    </ActionContainer>
  );
}
