import classes from "./AnalythicsItem.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
const AnalythicsItem = () => {
  return (
    <motion.div className={classes.item} whileHover={{ scale: 1.15 }}>
      <Image
        alt="Analthics"
        src={"/img/Analythics.svg"}
        width={180}
        height={200}
      />
      <p>
        We are providing our analythics services. Based on{" "}
        <span className={classes.grades}>your grades </span> we will give you
        prognose end grade and some good advie
      </p>
    </motion.div>
  );
};

export default AnalythicsItem;
