"use client";
import { motion } from "framer-motion";
import classes from "./SubmitButton.module.scss";

type Params = {
  description: string;
};

const SubmitButton = ({ description }: Params) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: "-2px" }}
      transition={{ duration: 0.25, delay: 0.075 }}
      className={classes.btn}
      type="submit"
    >
      {description}
    </motion.button>
  );
};

export default SubmitButton;
