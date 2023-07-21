"use client";
import { useState, useEffect, useCallback } from "react";
import Button from "@/app/UI/Button/Button";
import classes from "./AllGrades.module.scss";
import Modal from "@/app/UI/Modal/Modal";
import SubjectItem from "../SubjectItem/SubjectItem";
import NewGradeForm from "../NewGradeForm/NewGradeForm";
import { User as FirebaseUser } from "firebase/auth";
import { useAuthContext } from "@/context/AuthContext";
import useUserData from "@/hooks/useUserData";
import LoadingBody from "@/app/UI/LoadingBody/LoadingBody";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/dashboard/redux-store";
import {
  gradesActions,
  sendGradesData,
} from "@/app/dashboard/redux-store/grades-slice";

const AllGrades = () => {
  const [showAddForm, setShowForm] = useState(false);

  const subjects = useSelector((state: RootState) => state.grades.subjects);
  const hasChanged = useSelector((state: RootState) => state.grades.changed);
  const dispatch = useDispatch();

  const user: FirebaseUser | undefined = useAuthContext();
  const { userData, error, loading } = useUserData(user?.uid || "");

  useEffect(() => {
    if (!loading) {
      dispatch(gradesActions.replaceData(userData?.subjects || []));
    }
  }, [loading, dispatch, userData]);

  useEffect(() => {
    if (hasChanged) {
      dispatch(sendGradesData(user!.uid, subjects) as any);
    }
  }, [subjects, user, hasChanged, dispatch]);

  if (loading) {
    return <LoadingBody />;
  }

  return (
    <>
      {showAddForm && (
        <Modal
          onClose={() => {
            setShowForm(false);
          }}
        >
          <NewGradeForm
            onClose={() => {
              setShowForm(false);
            }}
          />
        </Modal>
      )}
      <div className={classes["subject-container"]}>
        <Button
          description="Add Grade"
          isSubmit={false}
          clickFunction={() => {
            setShowForm(true);
          }}
        />
        {subjects.map((subject) => {
          return <SubjectItem key={subject.subject} subjectData={subject} />;
        })}
      </div>
    </>
  );
};

export default AllGrades;
