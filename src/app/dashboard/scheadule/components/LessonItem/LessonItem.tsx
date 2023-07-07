"use client";
import { useState } from "react";
import { Lesson } from "@/types/Lesson";
import InfoIcon from '@mui/icons-material/Info';
import classes from "./LessonItem.module.scss";
import Modal from "@/app/UI/Modal/Modal";
import LessonInfo from "./LessonInfoModal/LessonInfo";

type Params = {
  lessons: Lesson;
  distanceFromTopOfRange: number;
};

const LessonItem = ({
  lessons: { startTime, endTime, subject, teacher, day },
  distanceFromTopOfRange,
}: Params) => {
  const [infoModalActive, setInfoModalActive] = useState(false);

  const closeInfoModalHandler = () => {
    setInfoModalActive(false);
  };

  const hourDiffernce = endTime.hour - startTime.hour;
  const minuteDifference = endTime.minute - startTime.minute;
  const totalDifferenceInMinut = hourDiffernce * 60 + minuteDifference;
  const totalMinutesInPlan = 720;
  const disanceTromTopInPercents = (distanceFromTopOfRange / 180) * 100;

  return (
    <>
      {infoModalActive && (
        <Modal onClose={closeInfoModalHandler}>
          <LessonInfo onClose={closeInfoModalHandler} lesson={{ startTime, endTime, day, subject, teacher }} />
        </Modal>
      )}
      <div
        className={classes.lesson}
        style={{
          height: `calc((75vh - 40px) / (${totalMinutesInPlan} / ${totalDifferenceInMinut}))`,
          position: "absolute",
          top: `${disanceTromTopInPercents}%`,
        }}
      >
        <InfoIcon className={classes.icon} onClick={()=>{setInfoModalActive(true)}}  />
        <h2>{subject}</h2>
      </div>
    </>
  );
};

export default LessonItem;
