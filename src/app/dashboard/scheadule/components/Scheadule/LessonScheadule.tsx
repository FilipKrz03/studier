"use client";
import { useState } from "react";
import AddLesonForm from "../AddLesonForm/AddLesonForm";
import useWindowWidth from "@/hooks/useWindowWidth";
import Button from "@/app/UI/Button/Button";
import TimeItem from "../TimeItem/TimeItem";
import Modal from "@/app/UI/Modal/Modal";
import { days, hoursRanges } from "@/data/scheadule";
import classes from "./LessonsScheadule.module.scss";
import { Lesson } from "@/types/Lesson";

const LessonScheadule = () => {

  const windowWidth = useWindowWidth();
  const [showModal, setShowModal] = useState(false);
  const [lessons , setLessons] = useState<Lesson[]>([]);

  const addLessonHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const addLesson = (lesson:Lesson) => {
    setLessons([...lessons , lesson]);
    console.log(lessons);
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
          return (
            <div className={classes.range} key={range}>
              <div className={classes["range-item"]}>{range}</div>
              {days.map((day) => {
                return <TimeItem key={day.fullName} />;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LessonScheadule;
