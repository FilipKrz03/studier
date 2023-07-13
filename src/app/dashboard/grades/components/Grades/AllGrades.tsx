"use client";
import { useState } from "react";
import Button from "@/app/UI/Button/Button";
import classes from "./AllGrades.module.scss";
import Modal from "@/app/UI/Modal/Modal";
import SubjectItem from "../SubjectItem/SubjectItem";
import NewGradeForm from "../NewGradeForm/NewGradeForm";
import { Grade, Subject } from "@/types/Grade";

const AllGrades = () => {

  const [showForm, setShowForm] = useState(false);
  const [subjects , setSubjects] = useState<Subject[]>([])

  const addGrade = (grade:Grade) => {
    let isSubjectExisting = false
    const subjectsArray = subjects;
    subjectsArray.map(subject => {
    if(grade.subject === subject.subject){
        subject.grades.push(grade);
        isSubjectExisting = true;
        return;
    }
   })
   if (!isSubjectExisting){
    subjectsArray.push({subject:grade.subject , grades:[grade]});
   }
   setSubjects(subjectsArray);
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
      <div className={classes['subject-container']}>
      <Button
        description="Add Grade"
        isSubmit={false}
        clickFunction={() => {
          setShowForm(true);
        }}
      />
        {subjects.map(subject => {
            return <SubjectItem key={subject.subject} subjectData={subject} />
        })}
      </div>
    </>
  );
};

export default AllGrades;
