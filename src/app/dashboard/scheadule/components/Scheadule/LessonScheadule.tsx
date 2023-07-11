"use client";
import { useState, useEffect } from "react";
import AddLesonForm from "../AddLesonForm/AddLesonForm";
import useWindowWidth from "@/hooks/useWindowWidth";
import Button from "@/app/UI/Button/Button";
import TimeItem from "../TimeItem/TimeItem";
import Modal from "@/app/UI/Modal/Modal";
import { days, hoursRanges } from "@/data/scheadule";
import classes from "./LessonsScheadule.module.scss";
import { Lesson } from "@/types/Lesson";
import LessonItem from "../LessonItem/LessonItem";
import addData from "@/firebase/firestore/addData";
import { User as FirebaseUser } from "firebase/auth";
import { useAuthContext } from "@/context/AuthContext";
import useUserData from "@/hooks/useUserData";
import LoadingBody from "@/app/UI/LoadingBody/LoadingBody";
import Alert from "@/app/UI/Alert/Alert";

const LessonScheadule = () => {
  const windowWidth = useWindowWidth();
  const [showModal, setShowModal] = useState(false);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [showBadDataModal, setShowBadDataModal] = useState(false);
  const user: FirebaseUser | undefined = useAuthContext();
  const { userData, loading, error } = useUserData(user?.uid || "");

  useEffect(() => {
    if (!loading) {
      setLessons(userData!.lessons || []);
    }
  }, [loading, userData]);

  const addLessonHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const addLesson = async (lesson: Lesson) => {
    let isHourAvaliable = true;
    const newLessonStartTimeInMinute =
      lesson.startTime.hour * 60 + lesson.startTime.minute;
    const newLessonEndTimeInMinute =
      lesson.endTime.hour * 60 + lesson.endTime.minute;
    lessons.map((savedLesson) => {
      const savedLessonStartTimeInMinute =
        savedLesson.startTime.hour * 60 + savedLesson.startTime.minute;
      const savedLessonEndTimeInMinute =
        savedLesson.endTime.hour * 60 + savedLesson.endTime.minute;
      if (
        savedLesson.day === lesson.day &&
        newLessonStartTimeInMinute <= savedLessonEndTimeInMinute &&
        newLessonEndTimeInMinute >= savedLessonStartTimeInMinute
      ) {
        isHourAvaliable = false;
        setShowBadDataModal(true);
        return;
      }
    });

    if (!isHourAvaliable) return;

    setLessons([...lessons, lesson]);
    const { error } = await addData("users", user!.uid, {
      lessons: [...lessons, lesson],
    });
    if (error) {
      console.log(error);
    }
  };

  const delateLesson = async (id: number) => {
    const updatedLessons = lessons.filter((lesson) => lesson.id !== id);
    setLessons(updatedLessons);
    const { error } = await addData("users", user!.uid, {
      lessons: updatedLessons,
    });
    if (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <LoadingBody />;
  }

  return (
    <>
      {showBadDataModal && (
        <Modal
          onClose={() => {
            setShowBadDataModal(false);
          }}
        >
          <div className={classes.error}>
            <Alert alertMessage="Lesson already exist in entered day and hour range !" />
            <button
              className={classes.confirm}
              onClick={() => {
                setShowBadDataModal(false);
              }}
            >
              Okay
            </button>
          </div>
        </Modal>
      )}
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <AddLesonForm onClose={closeModalHandler} onAddLesson={addLesson} />
        </Modal>
      )}
      <Button
        description="Add Lesson"
        isSubmit={false}
        clickFunction={addLessonHandler}
      />
      <div className={classes.table}>
        <div className={classes.description}>
          <span className={classes["description-item"]}>Hours</span>
          {days.map((day) => {
            return (
              <span className={classes["description-item"]} key={day.fullName}>
                {windowWidth < 530 ? day.shortName : day.fullName}
              </span>
            );
          })}
        </div>
        {hoursRanges.map((range) => {
          const lessonsInCurrentRange = lessons.filter(
            (lesson) =>
              lesson.startTime.hour >= range.rangeStart &&
              lesson.startTime.hour < range.rangeEnd
          );
          return (
            <div className={classes.range} key={range.rangeStart}>
              <div className={classes["range-item"]}>{range.range}</div>
              {days.map((day) => {
                const lessonInRangeWithCurrentDay =
                  lessonsInCurrentRange.filter(
                    (lesson) => lesson.day === day.fullName
                  );
                return (
                  <TimeItem key={day.shortName}>
                    {lessonInRangeWithCurrentDay.map((lesson) => {
                      const distanceFromTopOfRangeInMinutes =
                        60 * (lesson.startTime.hour - range.rangeStart) +
                        lesson.startTime.minute;
                      return (
                        <LessonItem
                          id={lesson.id}
                          key={Math.random()}
                          onDelate={delateLesson}
                          lessons={lesson}
                          distanceFromTopOfRange={
                            distanceFromTopOfRangeInMinutes
                          }
                        />
                      );
                    })}
                  </TimeItem>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LessonScheadule;
