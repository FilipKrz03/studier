import classes from "./GradesItem.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const GradesItem = () => {
  return (
    
    <motion.div className={classes.item} whileHover={{ scale: 1.15 }}>
      <Image alt="Grade" src={"/img/Grades.svg"} width={250} height={200} />
      <p>
        Here you can add and manage{" "}
        <span className={classes.grades}> your grades ! </span> It is never been
        so simple. Also you are able to see your weighted average
      </p>
    </motion.div>
  );
};

export default GradesItem;
