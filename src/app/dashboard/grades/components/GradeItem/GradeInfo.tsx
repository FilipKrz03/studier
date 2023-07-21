"use client";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grade } from "@/types/Grade";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./GradeInfo.module.scss";
import DelateConfrimer from "@/app/UI/DelateConfrimer/DelateConfrimer";
import Modal from "@/app/UI/Modal/Modal";
import EditIcon from "@mui/icons-material/Edit";
import NewGradeForm from "../NewGradeForm/NewGradeForm";
import { useDispatch } from "react-redux";
import { gradesActions } from "@/app/dashboard/redux-store/grades-slice";

type Props = {
  gradeInfo: Grade;
  weight: number;
  onClose: () => void;
};

const GradeInfo = ({ gradeInfo, weight, onClose }: Props) => {
  const [showDelateConfrimer, setShowDelateConfrimer] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const dispatch = useDispatch();

  const delateHandler = () => {
    dispatch(gradesActions.removeGrade(gradeInfo.id));
    onClose();
  };

  return (
    <>
      {showDelateConfrimer && (
        <DelateConfrimer
          item="grade"
          onRefuse={() => {
            setShowDelateConfrimer(false);
          }}
          onConfirm={delateHandler}
        />
      )}
      {showEditModal && (
        <Modal
          onClose={() => {
            setShowEditModal(false);
          }}
          isHigherOrder={true}
        >
          <NewGradeForm
            onClose={() => {
              setShowEditModal(false);
            }}
            gradeInfo={gradeInfo}
            isEditing={true}
          />
        </Modal>
      )}
      <div className={classes.info}>
        <CloseIcon
          fontSize="large"
          className={`${classes.icon} ${classes.close}`}
          onClick={onClose}
        />
        <DeleteIcon
          fontSize="large"
          className={`${classes.icon} ${classes.delete}`}
          onClick={() => {
            setShowDelateConfrimer(true);
          }}
        />
        <EditIcon
          fontSize="large"
          className={`${classes.icon} ${classes.edit}`}
          onClick={() => {
            setShowEditModal(true);
          }}
        />
        <p>Date : {gradeInfo.day} </p>
        <p>Category : {gradeInfo.category}</p>
        <p>Weight : {weight}</p>
      </div>
    </>
  );
};

export default GradeInfo;
