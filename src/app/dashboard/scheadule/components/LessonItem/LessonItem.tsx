"use client";
import { Lesson } from "@/types/Lesson";
import classes from "./LessonItem.module.scss";

type Params = {
  lessons: Lesson;
  distanceFromTopOfRange: number;
};

const LessonItem = ({
  lessons: { startTime, endTime, subject, teacher },
  distanceFromTopOfRange,
}: Params) => {
  
  const hourDiffernce = endTime.hour - startTime.hour;
  const minuteDifference = endTime.minute - startTime.minute;
  const totalDifferenceInMinut = hourDiffernce * 60 + minuteDifference;
  const totalMinutesInPlan = 720;
  const disanceTromTopInPercents = (distanceFromTopOfRange / 180) * 100;

  return (
    <div
      className={classes.lesson}
      style={{
        height: `calc((75vh - 40px) / (${totalMinutesInPlan} / ${totalDifferenceInMinut}))`,
        position: "absolute",
        top: `${disanceTromTopInPercents}%`,
      }}
    >
      <h2>{subject}</h2>
    </div>
  );
};

export default LessonItem;
