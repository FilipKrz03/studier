import LessonScheadule from "./components/Scheadule/LessonScheadule";
import classes from "./page.module.scss";

export default function Scheadule() {
  return (
    <div className={classes.container}>
      <LessonScheadule />
    </div>
  );
}
