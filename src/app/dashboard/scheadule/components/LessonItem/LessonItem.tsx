import { Lesson } from "@/types/Lesson";
import classes from "./LessonItem.module.scss";

type Params = {
  lessons: Lesson;
};

const LessonItem = ({
  lessons: { startTime, endTime, subject, teacher },
}: Params) => {
  const hourDiffernce = endTime.hour - startTime.hour;
  const minuteDifference = endTime.minute - startTime.minute;
  const totalDifferenceInMinut = hourDiffernce * 60 + minuteDifference;
  const totalMinutesInPlan = 720;

  return (
    <div
      className={classes.lesson}
      style={{
        height: `calc((75vh-150px) / (${totalMinutesInPlan} / ${totalDifferenceInMinut}));`,
      }}
    >
      <h2>Subject</h2>
    </div>
  );
};

export default LessonItem;
