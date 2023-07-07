"use client";
import { Fragment, useState , useEffect } from "react";
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
import { useAuthContext } from "@/context/AuthContext";
import useUserData from "@/hooks/useUserData";
import LoadingBody from "@/app/UI/LoadingBody/LoadingBody";

const LessonScheadule = () => {

  const windowWidth = useWindowWidth();
  const [showModal, setShowModal] = useState(false);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const user: any = useAuthContext();
  const { userData, loading, error } = useUserData(user ? user.uid : null);

    
  useEffect(()=>{
    if(!loading){
      setLessons(userData!.lessons || []);
    }
  } , [loading , userData])

  const addLessonHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const addLesson = async (lesson: Lesson) => {
    setLessons([...lessons, lesson]);
    const { error } = await addData("users", user.uid, {
      lessons: [...lessons, lesson],
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
                          key={Math.random()}
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
