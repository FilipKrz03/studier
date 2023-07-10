import {useState} from 'react';
import DelateConfrimer from './DelateConfirmer';
import classes from './LessonInfoModal.module.scss';
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { Lesson } from "@/types/Lesson";


type Params = {
  lesson: Lesson;
  onClose: () => void;
  onDelate: (id: number) => void;
};

const LessonInfoModal = ({
  lesson: { startTime, endTime, teacher, subject, id },
  onClose,
  onDelate,
}: Params) => {

  const [showDelateConfrimer , setShowDelateConfrimer] = useState(false);


  const delateLessonHandler = () => {
    onDelate(id);
  };

  const showModalHandler = () => {
    setShowDelateConfrimer(true);
  }

  const hideModalHandler = () => {
    setShowDelateConfrimer(false);
  }

  let startTimeMinutesToDisplay: number | string = startTime.minute;
  let endTimeMinutesToDisplay: number | string = endTime.minute;

  if (startTime.minute <= 9) {
    startTimeMinutesToDisplay = "0" + startTime.minute;
  }

  if (endTime.minute <= 9) {
    endTimeMinutesToDisplay = "0" + startTime.minute;
  }

  return (
    <>
    {showDelateConfrimer && <DelateConfrimer onConfirm={delateLessonHandler} onRefuse={hideModalHandler} />}
    <div className={classes["info-box"]}>
      <CloseIcon className={classes.icon} onClick={onClose} fontSize="large" />
      <DeleteIcon
        className={classes.delate}
        fontSize="large"
        onClick={showModalHandler}
      />
      <h3>Lesson Name : {subject} </h3>
      <div className={classes["hour-info"]}>
        <div className={classes["hour-info-item"]}>
          <span>Start time : </span>
          <span>
            {startTime.hour}:{startTimeMinutesToDisplay}
          </span>
        </div>
        <div className={classes["hour-info-item"]}>
          <span>End time : </span>
          <span>
            {endTime.hour}:{endTimeMinutesToDisplay}
          </span>
        </div>
      </div>
      <p>Teacher : {teacher}</p>
    </div>
    </>
  );
};

export default LessonInfoModal;
