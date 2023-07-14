"use client";
import { useState } from "react";
import Modal from "@/app/UI/Modal/Modal";
import { Grade } from "@/types/Grade";
import classes from "./GradeItem.module.scss";
import GradeInfo from "./GradeInfo";

type Props = {
  gradeInfo: Grade , 
  onDelate : (id:number) => void , 
};

const GradeItem = ({ gradeInfo  , onDelate }: Props) => {

  const [showInfoModal, setShowInfoModal] = useState(false);

  const delateHandler = () => {
    onDelate(gradeInfo.id);
  }

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
            <GradeInfo onClose={()=>{setShowInfoModal(false)}} gradeInfo={gradeInfo} weight={gradeWeight} onDelate={delateHandler} />
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
