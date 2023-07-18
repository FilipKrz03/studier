"use client";
import { useState } from "react";
import Modal from "@/app/UI/Modal/Modal";
import { Grade } from "@/types/Grade";
import classes from "./GradeItem.module.scss";
import GradeInfo from "./GradeInfo";
import { pickColorAndWeightDependingOnCategory } from "@/app/utils/pickColorAndWeightDependingOnCategory";

type Props = {
  gradeInfo: Grade;
  onDelate: (id: number) => void;
  onEdit: (grade: Grade) => void;
};

const GradeItem = ({ gradeInfo, onDelate, onEdit }: Props) => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  const delateHandler = () => {
    onDelate(gradeInfo.id);
  };

  const {color , gradeWeight} = pickColorAndWeightDependingOnCategory(gradeInfo.category);
  
  const editHandler = (grade: Grade) => {
    onEdit(grade);
  };

  return (
    <>
      {showInfoModal && (
        <Modal
          onClose={() => {
            setShowInfoModal(false);
          }}
        >
          <GradeInfo
            onClose={() => {
              setShowInfoModal(false);
            }}
            gradeInfo={gradeInfo}
            weight={gradeWeight}
            onDelate={delateHandler}
            onEdit={editHandler}
          />
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
