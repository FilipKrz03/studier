"use client";
import { useState } from "react";
import Modal from "@/app/UI/Modal/Modal";
import { Grade } from "@/types/Grade";
import classes from "./GradeItem.module.scss";
import GradeInfo from "./GradeInfo";

type Props = {
  gradeInfo: Grade;
};

const GradeItem = ({ gradeInfo }: Props) => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  let color = "#9d0208";
  let gradeWeight = 5;

  switch (gradeInfo.category) {
    case "Short-Test":
      color = "#dc2f02";
      gradeWeight = 4;
      break;
    case "Oral Answer":
      color = "#f77f00";
      gradeWeight = 3;
      break;
    case "Project":
      color = "#2a9d8f";
      gradeWeight = 2;
      break;
    case "Activity":
      color = "#8ecae6";
      gradeWeight = 1;
      break;
  }

  return (
    <>
      {showInfoModal && (
        <Modal
          onClose={() => {
            setShowInfoModal(false);
          }}
        >
            <GradeInfo onClose={()=>{setShowInfoModal(false)}} gradeInfo={gradeInfo} weight={gradeWeight} />
        </Modal>
      )}
      <div
        className={classes.grade}
        style={{ backgroundColor: color }}
        onClick={() => {
          setShowInfoModal(true);
        }}
      >
        {gradeInfo.grade}
      </div>
    </>
  );
};

export default GradeItem;
