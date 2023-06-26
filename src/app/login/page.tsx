"use client";
import { useState } from "react";
import LoadingBody from "../UI/LoadingBody/LoadingBody";
import LoginForm from "./components/LoginForm";
import ActionContainer from "../UI/ActionsContainer/ActionContainer";
import ActionInformation from "../UI/ActionInformation/ActionInformation";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const loadingChangeHandler = (isLoading: boolean) => {
    setLoading(isLoading);
  };

  if (loading) {
    return (
    <LoadingBody />
    );
  }

  return (
    <ActionContainer>
      <ActionInformation mainTitle="Welcome Back" message="Log in !" />
      <LoginForm onLoadingChange={loadingChangeHandler} />
    </ActionContainer>
  );
}
