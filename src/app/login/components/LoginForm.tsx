"use client";
import { TextField, createTheme, ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import classes from "./LoginForm.module.scss";

const theme = createTheme({
  palette: {
    primary:{
      main: "#00253e",
    } , 
    secondary: {
      main: "#f2f2f2",
    },
  },
});

const LoginForm = () => {
  const { theme: currentTheme } = useTheme();

  const formSubmitHandler = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const inputColor = currentTheme === "light" ? "primary" : "secondary";

  return (
    <ThemeProvider theme={theme}>
      <motion.form
        className={classes.form}
        onSubmit={formSubmitHandler}
        animate={{ x: 0, filter: "blur(0px)", opacity: 1 }}
        initial={{ x: 200, filter: "blur(5px)", opacity: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <TextField
          label="E-mail"
          color={inputColor}
          className={classes.input}
        />
        <TextField
          type="password"
          label="Password"
          color={inputColor}
          className={classes.input}
        />
        <button type="submit">Log in</button>
      </motion.form>
    </ThemeProvider>
  );
};

export default LoginForm;
