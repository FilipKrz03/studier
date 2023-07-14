"use client";
import { useState , useEffect , useCallback } from "react";
import Button from "@/app/UI/Button/Button";
import classes from "./AllGrades.module.scss";
import Modal from "@/app/UI/Modal/Modal";
import SubjectItem from "../SubjectItem/SubjectItem";
import NewGradeForm from "../NewGradeForm/NewGradeForm";
import { Grade, Subject } from "@/types/Grade";
import addData from "@/firebase/firestore/addData";
import {User as FirebaseUser} from 'firebase/auth';
import { useAuthContext } from "@/context/AuthContext";
import useUserData from "@/hooks/useUserData";
import LoadingBody from "@/app/UI/LoadingBody/LoadingBody";

const AllGrades = () => {

  const [showForm, setShowForm] = useState(false);
  const [subjects , setSubjects] = useState<Subject[]>([])
  const user:FirebaseUser|undefined = useAuthContext();
  const {userData , error , loading} = useUserData(user?.uid || '');

  useEffect(()=>{
    if(!loading){
      setSubjects(userData!.subjects || []);
    }
  }, [loading , userData ])


  const addGrade = async (grade:Grade) => {
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
   const {error} = await addData('users' , user!.uid , {
    subjects: subjectsArray
   })
   if(error){
    console.log(error);
   }
  }
  
  
  const delateHandler = async(id:number) => {
    const arrayWithoutGrade = subjects.map(subject =>{
      const filteredGrades = subject.grades.filter(grade => grade.id !== id);
      return {subject : subject.subject , grades:filteredGrades};
    })
    const arrayWithoutEmptySubjects = arrayWithoutGrade.filter(subject => subject.grades.length !== 0);
    setSubjects(arrayWithoutEmptySubjects);
    const {error} = await addData('users' , user!.uid , {
      subjects: arrayWithoutEmptySubjects
     })
     if(error){
      console.log(error);
     }
  }

  if(loading){
    return <LoadingBody />
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
            return <SubjectItem key={subject.subject} subjectData={subject} onDelate={delateHandler} />
        })}
      </div>
    </>
  );
};

export default AllGrades;
