"use client";
import { useState, useEffect } from "react";
import classes from "./AnalythicsBox.module.scss";
import { User as FirebaseUser } from "firebase/auth";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import useUserData from "@/hooks/useUserData";
import { useAuthContext } from "@/context/AuthContext";
import { Subject } from "@/types/Grade";
import { useRouter } from "next/navigation";
import LessonItem from "../LessonItem/LessonItem";
import Button from "@/app/UI/Button/Button";
import LoadingBody from "@/app/UI/LoadingBody/LoadingBody";

const AnalythicsBox = () => {
  const user: FirebaseUser | undefined = useAuthContext();
  const [gradesData, setGradesData] = useState<Subject[]>([]);
  const { loading, userData } = useUserData(user?.uid || "");
  const router = useRouter();

  useEffect(() => {
    if (!loading) setGradesData(userData!.subjects || []);
  }, [loading, userData]);

  if (loading) {
    return <LoadingBody />;
  }

  return (
    <>
      {gradesData.length === 0 && (
        <div className={classes.advice}>
          <p className={classes.information}>
            <PriorityHighIcon /> You do not have any grade yet !{" "}
          </p>
          <Button
            clickFunction={() => {
              router.push("/dashboard/grades");
            }}
            isSubmit={false}
            description="Add grades"
          />
        </div>
      )}
      <div className={classes["grades-container"]}>
        {gradesData.map((grade) => {
          return <LessonItem key={Math.random()} subject={grade} />;
        })}
      </div>
    </>
  );
};

export default AnalythicsBox;
