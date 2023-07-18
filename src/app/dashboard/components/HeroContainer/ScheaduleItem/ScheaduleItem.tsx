"use client";
import classes from "./ScheaduleItem.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const ScheaduleItem = () => {
  return (
    <motion.div className={classes.item} whileHover={{ scale: 1.1 }}>
      <Image
        className={classes.image}
        alt="Scheadule-image"
        src={"/img/Scheadule.svg"}
        width={300}
        height={135}
      />
      <p>
        Here you can make your
        <span className={classes.plan}> Lesson Plan ! </span> You are able to
        add lessons with detail information 📖📖 in easy way You can manage
        however you want !
      </p>
    </motion.div>
  );
};

export default ScheaduleItem;
