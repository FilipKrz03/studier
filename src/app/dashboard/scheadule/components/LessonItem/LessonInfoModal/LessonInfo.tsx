import classes from "./LessonInfo.module.scss";
import CloseIcon from '@mui/icons-material/Close';
import { Lesson } from "@/types/Lesson";

type Params = {
  lesson:Lesson;
  onClose:()=>void , 
};

const LessonInfo = ({
  lesson: { startTime, endTime, teacher, subject },
  onClose
}: Params) => {
  return (
    <div className={classes["info-box"]}>
        <CloseIcon className={classes.icon} onClick={onClose} fontSize="large" />
      <h3>Lesson Name : {subject} </h3>
      <div className={classes["hour-info"]}>
        <div className={classes["hour-info-item"]}>
          <span>Start time : </span>
          <span>
            {startTime.hour}:{startTime.minute}
          </span>
        </div>
        <div className={classes["hour-info-item"]}>
          <span>End time : </span>
          <span>
            {endTime.hour}:{endTime.minute}
          </span>
        </div>
      </div>
      <p>Teacher : {teacher}</p>
    </div>
  );
};

export default LessonInfo;
