"use client";
import { useState } from "react";
import { Lesson } from "@/types/Lesson";
import InfoIcon from "@mui/icons-material/Info";
import classes from "./LessonItem.module.scss";
import Modal from "@/app/UI/Modal/Modal";
import LessonInfoModal from "./LessonInfoModal/LessonInfoModal";
import useWindowWidth from "@/hooks/useWindowWidth";

type Params = {
  id: number;
  lessons: Lesson;
  distanceFromTopOfRange: number;
  onDelate: (id: number) => void;
};

const LessonItem = ({
  lessons: { startTime, endTime, subject, teacher, day, id },
  distanceFromTopOfRange,
  onDelate,
}: Params) => {
  
  const windowWidth = useWindowWidth();
  const [infoModalActive, setInfoModalActive] = useState(false);
  const hourDiffernce = endTime.hour - startTime.hour;
  const minuteDifference = endTime.minute - startTime.minute;
  const totalDifferenceInMinut = hourDiffernce * 60 + minuteDifference;
  const totalMinutesInPlan = 720;
  const disanceTromTopInPercents = (distanceFromTopOfRange / 180) * 100;

  let subjectLength = 9;

  if (windowWidth < 1200) subjectLength = 7;
  if (windowWidth < 700) subjectLength = 5;
  if (windowWidth < 450) subjectLength = 3;

  const subjectNameToDisplay = subject.slice(0, subjectLength) + "...";

  const closeInfoModalHandler = () => {
    setInfoModalActive(false);
  };

  const delateLessonHandler = (id: number) => {
    onDelate(id);
  };

  return (
    <>
      {infoModalActive && (
        <Modal onClose={closeInfoModalHandler}>
          <LessonInfoModal
            onClose={closeInfoModalHandler}
            lesson={{ startTime, endTime, day, subject, teacher, id }}
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
        <h2>{subjectNameToDisplay}</h2>
      </div>
    </>
  );
};

export default LessonItem;
