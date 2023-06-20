"use client";
import { TextField, createTheme, ThemeProvider, Alert } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import classes from "./RegisterForm.module.scss";

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
  userName:string , 
  eMail: string , 
  password: string ,
  repeatPassword:string , 
}

const RegisterForm = () => {
  const { theme: currentTheme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const inputColor = currentTheme === "light" ? "primary" : "secondary";
  const userInputColor = errors.userName ? "error" : inputColor;
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
          {errors.userName && (
            <Alert
              sx={{ maxWidth: "300px", fontSize: "13px" }}
              variant="filled"
              severity="error"
            >
              User name should be at least 3 character long ! 
            </Alert>
          )}
          <TextField
            fullWidth
            {...register("userName", { required: true, minLength:3})}
            label="User name"
            color={userInputColor}
            className={classes.input}
            focused
          />
        </div>
        <div className={classes["form-element"]}>
          {errors.eMail && (
            <Alert
              sx={{ maxWidth: "300px", fontSize: "13px" }}
              variant="filled"
              severity="error"
            >
              Enter valid email adress !
            </Alert>
          )}
          <TextField
            fullWidth
            {...register("eMail", { required: true, pattern: /^\S+@\S+$/i })}
            label="E-mail"
            color={emailInputColor}
            className={classes.input}
            focused
          />
        </div>
        <div className={classes["form-element"]}>
          {errors.password && (
            <Alert
              sx={{ maxWidth: "300px", fontSize: "13px" }}
              variant="filled"
              severity="error"
            >
              Password must be at least 6 characters length !
            </Alert>
          )}
          <TextField
            fullWidth
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            label="Password"
            color={passwordInputColor}
            className={classes.input}
            focused
          />
        </div>
        <div className={classes["form-element"]}>
          {errors.password && (
            <Alert
              sx={{ maxWidth: "300px", fontSize: "13px" }}
              variant="filled"
              severity="error"
            >
              Password must be at least 6 characters length !
            </Alert>
          )}
          <TextField
            fullWidth
            {...register("repeatPassword", { required: true, minLength: 6 })}
            type="password"
            label="Repeat Password"
            color={passwordInputColor}
            className={classes.input}
            focused
          />
        </div>
        <button type="submit">Register</button>
      </motion.form>
    </ThemeProvider>
  );
};

export default RegisterForm;
