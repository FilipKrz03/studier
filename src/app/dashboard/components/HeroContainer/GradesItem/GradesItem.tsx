import classes from "./GradesItem.module.scss";
import DashboardHeroItem from "@/app/UI/DashboardHeroItem/DashboardHeroItem";
import Image from "next/image";

const GradesItem = () => {
  return (
    <DashboardHeroItem
      link="/dashboard/grades"
      gridArea="grades"
      isWidther={false}
    >
      <Image alt="Grade" src={"/img/Grades.svg"} width={250} height={200} />
      <p>
        Here you can add/manage
        <span className={classes.grades}> your grades !</span> It is never been
        so simple. 🤖🤖 Also you are able to see your weighted average
      </p>
    </DashboardHeroItem>
  );
};

export default GradesItem;
