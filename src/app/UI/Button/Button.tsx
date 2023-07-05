"use client";
import { motion } from "framer-motion";
import classes from "./Button.module.scss";

type Params = {
  description: string;
  isSubmit: boolean;
  clickFunction?: () => void;
};

const Button = ({ description, isSubmit, clickFunction }: Params) => {
  return (
    <motion.button
      onClick={clickFunction ? clickFunction : () => {}}
      whileHover={{ scale: 1.05, y: "-2px" }}
      transition={{ duration: 0.25, delay: 0.075 }}
      className={classes.btn}
      type={isSubmit ? "submit" : "button"}
    >
      {description}
    </motion.button>
  );
};

export default Button;
