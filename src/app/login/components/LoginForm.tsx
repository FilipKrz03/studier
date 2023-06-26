"use client";
import { useState } from "react";
import { TextField, createTheme, ThemeProvider, CircularProgress } from "@mui/material";
import Alert from "@/app/UI/Alert/Alert";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import signIn from "@/firebase/auth/signin";
import SubmitButton from "@/app/UI/SubmitButton/SubmitButton";
import classes from "./LoginForm.module.scss";
import { useRouter } from "next/navigation";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00253e",
    },
    secondary: {
      main: "#f2f2f2",
    },
  },
});

interface IFormInput {
  eMail: string;
  password: string;
}

type Props = {
  onLoadingChange:(isLoading:boolean)=>void
}

  const LoginForm = ({onLoadingChange:setIsLoading}:Props) => {

  const router = useRouter();
  const { theme: currentTheme } = useTheme();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      setError("");
      setIsLoading(true);
      await signIn(data.eMail, data.password);
    } catch {
      setIsLoading(false);
      return setError("Failed to log in , bad email or password");
    }
    setIsLoading(false);
    return router.push("/dashboard");
  };


  const inputColor = currentTheme === "light" ? "primary" : "secondary";
  const emailInputColor = errors.eMail ? "error" : inputColor;
  const passwordInputColor = errors.password ? "error" : inputColor;

  return (
    <ThemeProvider theme={theme}>
      <motion.form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        animate={{ x: 0, filter: "blur(0px)", opacity: 1 }}
        initial={{ x: 200, filter: "blur(5px)", opacity: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className={classes["form-element"]}>
          <TextField
            fullWidth
            {...register("eMail", { required: true, pattern: /^\S+@\S+$/i })}
            label="E-mail"
            color={emailInputColor}
            className={classes.input}
            focused
          />
          {errors.eMail && <Alert alertMessage="Enter valid email adress" />}
        </div>
        <div className={classes["form-element"]}>
          <TextField
            fullWidth
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            label="Password"
            color={passwordInputColor}
            className={classes.input}
            focused
          />
          {errors.password && (
            <Alert alertMessage="Password need to be at least 6 characters length" />
          )}
        </div>
        <SubmitButton description="Log in" />
      </motion.form>
    </ThemeProvider>
  );
};

export default LoginForm;
