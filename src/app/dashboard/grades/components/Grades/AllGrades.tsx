"use client";
import { useState } from "react";
import Button from "@/app/UI/Button/Button";
import classes from "./AllGrades.module.scss";
import Modal from "@/app/UI/Modal/Modal";
import NewGradeForm from "../NewGradeForm/NewGradeForm";
import { Grade } from "@/types/Grade";

const AllGrades = () => {

  const [showForm, setShowForm] = useState(false);
  const [grades , setGrades] = useState<Grade[]>([])

  const addGrade = (grade:Grade) => {
    setGrades([...grades , grade]);
    console.log(grades);
  }

  return (
    <>
      {showForm && (
        <Modal
          onClose={() => {
            setShowForm(false);
          }}
        >
          <NewGradeForm
            onAdd={addGrade}
            onClose={() => {
              setShowForm(false);
            }}
          />
        </Modal>
      )}
      <Button
        description="Add Grade"
        isSubmit={false}
        clickFunction={() => {
          setShowForm(true);
        }}
      />
    </>
  );
};

export default AllGrades;
