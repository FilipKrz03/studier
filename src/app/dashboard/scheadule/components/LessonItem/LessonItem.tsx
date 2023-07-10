"use client";
import { useState } from "react";
import { Lesson } from "@/types/Lesson";
import InfoIcon from "@mui/icons-material/Info";
import classes from "./LessonItem.module.scss";
import Modal from "@/app/UI/Modal/Modal";
import LessonInfo from "./LessonInfoModal/LessonInfo";

type Params = {
  id:number , 
  lessons: Lesson;
  distanceFromTopOfRange: number;
  onDelate : (id:number) => void , 
};

const LessonItem = ({
  lessons: { startTime, endTime, subject, teacher, day , id },
  distanceFromTopOfRange,
  onDelate , 
}: Params) => {

  const [infoModalActive, setInfoModalActive] = useState(false);
  const hourDiffernce = endTime.hour - startTime.hour;
  const minuteDifference = endTime.minute - startTime.minute;
  const totalDifferenceInMinut = hourDiffernce * 60 + minuteDifference;
  const totalMinutesInPlan = 720;
  const disanceTromTopInPercents = (distanceFromTopOfRange / 180) * 100;

  const closeInfoModalHandler = () => {
    setInfoModalActive(false);
  };


  const delateLessonHandler = (id:number) => {
    onDelate(id);
  }

  return (
    <>
      {infoModalActive && (
        <Modal onClose={closeInfoModalHandler}>
          <LessonInfo
            onClose={closeInfoModalHandler}
            lesson={{ startTime, endTime, day, subject, teacher , id }}
            onDelate={delateLessonHandler}
          />
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
        <InfoIcon
          className={classes.icon}
          onClick={() => {
            setInfoModalActive(true);
          }}
          fontSize="small"
        />
        <h2>{subject}</h2>
      </div>
    </>
  );
};

export default LessonItem;
