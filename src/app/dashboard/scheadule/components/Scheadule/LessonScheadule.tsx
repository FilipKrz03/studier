"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import TimeItem from "../TimeItem/TimeItem";
import classes from "./LessonsScheadule.module.scss";

const LessonScheadule = () => {
  const days: {fullName:string , shortName:string}[] = [
    {fullName :"Monday", shortName : 'Mon.'} , 
    { fullName : "Tuesday", shortName : 'Tue.'} , 
    { fullName : "Wednesday" , shortName : 'Wed.'},
    {fullName : "Thursday", shortName : 'Thur.'} , 
    {fullName : "Friday" , shortName : 'Fr.'},
    {fullName : "Satudray" , shortName : 'Sat.'},
    {fullName : "Sunday" , shortName : 'Sun.'},
  ];
  const hoursRanges: string[] = [
    "08:00-11:00",
    "11:00-14:00",
    "14:00-17:00",
    "17:00-20:00",
  ];

  const windowWidth = useWindowWidth();

  return (
    <div className={classes.table}>
      <div className={classes.description}>
        <span className={classes["description-item"]}>Hours</span>
        {days.map((day) => {
          return (
            <span className={classes["description-item"]} key={day.fullName}>
              {windowWidth < 530 ? day.shortName : day.fullName}
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
                  <TimeItem key={day.fullName} />
                )
              })}
            </div>
          )
        })}
    </div>
  );
};

export default LessonScheadule;
