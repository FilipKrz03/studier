import classes from "./AnalythicsItem.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import DashboardHeroItem from "@/app/UI/DashboardHeroItem/DashboardHeroItem";
const AnalythicsItem = () => {
  return (
    <DashboardHeroItem
      link="/dashboard/analythics"
      isWidther={false}
      gridArea="analythics"
    >
      <Image
        alt="Analthics"
        src={"/img/Analythics.svg"}
        width={180}
        height={200}
        className={classes.image}
      />
      <p>
        We are providing our
        <span className={classes.grades}> analythics </span> services . Based on
        your grades we will give you prognose end grade and some good advice
        📈📈
      </p>
    </DashboardHeroItem>
  );
};

export default AnalythicsItem;
