"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import Button from "@/app/UI/Button/Button";
import TimeItem from "../TimeItem/TimeItem";
import { days , hoursRanges } from "@/data/scheadule";
import classes from "./LessonsScheadule.module.scss";

const LessonScheadule = () => {

  const windowWidth = useWindowWidth();

  const addLessonHandler = () => {
    console.log('xd');
  }

  return (
    <>
      <Button description="Add Lesson" isSubmit={false} clickFunction={addLessonHandler}/>
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
        {hoursRanges.map((range) => {
          return (
            <div className={classes.range} key={range}>
              <div className={classes["range-item"]}>{range}</div>
              {days.map((day) => {
                return <TimeItem key={day.fullName} />;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LessonScheadule;
