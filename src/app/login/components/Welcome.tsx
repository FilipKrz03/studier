"use client";
import classes from "./Welcome.module.scss";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <motion.div
      className={classes.welcome}
      animate={{ x: 0, filter: "blur(0px)", opacity: 1 }}
      initial={{ x: -200, filter: "blur(5px)", opacity: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <p>Welcome Back</p>
      <span>Log in !</span>
    </motion.div>
  );
};

export default Welcome;
