import { useState } from "react";
import DelateConfrimer from "./DelateConfirmer";
import classes from "./LessonInfoModal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Lesson } from "@/types/Lesson";
import AddLesonForm from "../../AddLesonForm/AddLesonForm";
import Modal from "@/app/UI/Modal/Modal";

type Params = {
  lesson: Lesson;
  onClose: () => void;
  onDelate: (id: number) => void;
  onEdit: (lesson: Lesson) => void;
};

const LessonInfoModal = ({
  lesson: { startTime, endTime, teacher, subject, id, day },
  onClose,
  onDelate,
  onEdit,
}: Params) => {
  const [showDelateConfrimer, setShowDelateConfrimer] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const delateLessonHandler = () => {
    onDelate(id);
  };

  const showModalHandler = () => {
    setShowDelateConfrimer(true);
  };

  const hideModalHandler = () => {
    setShowDelateConfrimer(false);
  };

  const editLesonHandler = (lesson: Lesson) => {
    onEdit(lesson);
  };

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
      {showEditModal && (
        <Modal onClose = {()=>{setShowEditModal(false)}}
        isHigherOrder={true}
        >
        <AddLesonForm
          onClose={() => {
            setShowEditModal(false);
          }}
          onEditLesson={editLesonHandler}
          isEditing={true}
          lessonInfo={{ startTime, endTime, teacher, subject, id, day }}
        />
        </Modal>
      )}
      {showDelateConfrimer && (
        <DelateConfrimer
          onConfirm={delateLessonHandler}
          onRefuse={hideModalHandler}
        />
      )}
      <div className={classes["info-box"]}>
        <ModeEditIcon
          fontSize="large"
          className={classes.edit}
          onClick={() => {
            setShowEditModal(true);
          }}
        />
        <CloseIcon
          className={classes.icon}
          onClick={onClose}
          fontSize="large"
        />
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
