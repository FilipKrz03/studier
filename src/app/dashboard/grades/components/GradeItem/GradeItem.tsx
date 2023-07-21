"use client";
import { useState } from "react";
import Modal from "@/app/UI/Modal/Modal";
import { Grade } from "@/types/Grade";
import classes from "./GradeItem.module.scss";
import GradeInfo from "./GradeInfo";
import { pickColorAndWeightDependingOnCategory } from "@/app/utils/pickColorAndWeightDependingOnCategory";

type Props = {
  gradeInfo: Grade;
};

const GradeItem = ({ gradeInfo }: Props) => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const { color, gradeWeight } = pickColorAndWeightDependingOnCategory(
    gradeInfo.category
  );

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
