"use client";
import { useState, useEffect } from "react";
import classes from "./AnalythicsBox.module.scss";
import { User as FirebaseUser } from "firebase/auth";
import useUserData from "@/hooks/useUserData";
import { useAuthContext } from "@/context/AuthContext";
import { Subject } from "@/types/Grade";
import LessonItem from "../LessonItem/LessonItem";

const AnalythicsBox = () => {
  const user: FirebaseUser | undefined = useAuthContext();
  const [gradesData, setGradesData] = useState<Subject[]>([]);
  const { loading, userData } = useUserData(user?.uid || "");

  useEffect(() => {
    if (!loading) setGradesData(userData!.subjects);
  }, [loading, userData]);

  return (
    <div className={classes["grades-container"]}>
      {gradesData.map((grade) => {
        return <LessonItem key={Math.random()} subject={grade} />;
      })}
    </div>
  );
};

export default AnalythicsBox;
