import TimeItem from "../TimeItem/TimeItem";
import classes from "./LessonsScheadule.module.scss";

const LessonScheadule = () => {
  const days: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurstday",
    "Friday",
    "Satudray",
    "Sunday",
  ];
  const hoursRanges: string[] = [
    "08:00-11:00",
    "11:00-14:00",
    "14:00-17:00",
    "17:00-20:00",
  ];

  return (
    <div className={classes.table}>
      <div className={classes.description}>
        <span className={classes["description-item"]}>Hours</span>
        {days.map((day) => {
          return (
            <span className={classes["description-item"]} key={day}>
              {day}
            </span>
          );
        })}
      </div>
      {hoursRanges.map(range => {
          return (
            <div className={classes.range} key={range}>
              <div className={classes['range-item']}>{range}</div>
              {days.map(day => {
                return(
                  <TimeItem key={day} />
                )
              })}
            </div>
          )
        })}
    </div>
  );
};

export default LessonScheadule;
