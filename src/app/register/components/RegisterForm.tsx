"use client";
import { useState } from "react";
import { TextField, createTheme, ThemeProvider } from "@mui/material";
import Alert from "@/app/UI/Alert/Alert";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import signUp from "@/firebase/auth/signup";
import Button from "@/app/UI/Button/Button";
import { useRouter } from "next/navigation";
import addData from "@/firebase/firestore/addData";
import classes from "./RegisterForm.module.scss";
import LoadingBody from "@/app/UI/LoadingBody/LoadingBody";

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
  userName: string;
  eMail: string;
  password: string;
  repeatPassword: string;
}

const RegisterForm = () => {
  const { theme: currentTheme } = useTheme();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    let result: any = "";
    setError(false);
    try {
      setLoading(true);
      result = await signUp(data.eMail, data.password);
    } catch {
      setLoading(false);
      setError(true);
      return;
    }
    const { error } = await addData("users", result.user.uid, {
      username: data.userName,
    });
    if (error) {
      console.log("Failed to add username");
    }
    router.push("/dashboard");
  };

  const inputColor = currentTheme === "light" ? "primary" : "secondary";
  const userInputColor = errors.userName ? "error" : inputColor;
  const emailInputColor = errors.eMail ? "error" : inputColor;
  const passwordInputColor = errors.password ? "error" : inputColor;
  const repeatPasswordInputColor = errors.repeatPassword ? "error" : inputColor;

  return (
    <>
      {loading && <LoadingBody />}
      <ThemeProvider theme={theme}>
        <motion.form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          animate={{ x: 0, filter: "blur(0px)", opacity: 1 }}
          initial={{ x: 200, filter: "blur(5px)", opacity: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {error && <Alert alertMessage="This email already exist !" />}
          <div className={classes["form-element"]}>
            <TextField
              fullWidth
              {...register("userName", { required: true, minLength: 3 })}
              label="User name"
              color={userInputColor}
              className={classes.input}
              focused
            />
            {errors.userName && (
              <Alert alertMessage="User name should be at least 3 character long ! " />
            )}
          </div>
          <div className={classes["form-element"]}>
            <TextField
              fullWidth
              {...register("eMail", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              label="E-mail"
              color={emailInputColor}
              className={classes.input}
              focused
            />
            {errors.eMail && (
              <Alert alertMessage="Enter valid email adress !" />
            )}
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
              <Alert alertMessage="Password must be at least 6 characters length !" />
            )}
          </div>
          <div className={classes["form-element"]}>
            <TextField
              fullWidth
              {...register("repeatPassword", {
                required: true,
                validate: (val: string) => {
                  if (watch("password") != val)
                    return "Your passwords do not match";
                },
              })}
              type="password"
              label="Repeat Password"
              color={repeatPasswordInputColor}
              className={classes.input}
              focused
            />
            {errors.repeatPassword && (
              <Alert alertMessage={errors.repeatPassword!.message!} />
            )}
          </div>
          <Button description="Register" isSubmit={true} />
        </motion.form>
      </ThemeProvider>
    </>
  );
};

export default RegisterForm;
