"use client";
import classes from "./ActionInformation.module.scss";
import { motion } from "framer-motion";

type Props = {
  mainTitle: string;
  message: string;
};

const ActionInformation = ({ mainTitle, message }: Props) => {
  return (
    <motion.div
      className={classes.welcome}
      animate={{ x: 0, filter: "blur(0px)", opacity: 1 }}
      initial={{ x: -200, filter: "blur(5px)", opacity: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <p>{mainTitle}</p>
      <span>{message}</span>
    </motion.div>
  );
};

export default ActionInformation;
