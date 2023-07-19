"use client";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import classes from "./page.module.scss";

export default function Dashboard() {
  return (
    <div className={classes["page-container"]}>
      <HeroContainer />
    </div>
  );
}
