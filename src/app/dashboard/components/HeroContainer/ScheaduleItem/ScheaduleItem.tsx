"use client";
import classes from "./ScheaduleItem.module.scss";
import Image from "next/image";
import DashboardHeroItem from "@/app/UI/DashboardHeroItem/DashboardHeroItem";

const ScheaduleItem = () => {
  return (
    <DashboardHeroItem
      link="/dashboard/scheadule"
      isWidther={true}
      gridArea="scheadule"
    >
      <Image
        className={classes.image}
        alt="Scheadule-image"
        src={"/img/Scheadule.svg"}
        width={300}
        height={135}
      />
      <p>
        Here you can make your
        <span className={classes.plan}> lesson Plan ! </span> You are able to
        add lessons with detail information 📖📖 in easy way You can manage
        however you want !
      </p>
    </DashboardHeroItem>
  );
};

export default ScheaduleItem;
