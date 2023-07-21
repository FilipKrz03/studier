"use client";
import { useState, useEffect } from "react";
import AddLesonForm from "../AddLesonForm/AddLesonForm";
import useWindowWidth from "@/hooks/useWindowWidth";
import Button from "@/app/UI/Button/Button";
import TimeItem from "../TimeItem/TimeItem";
import Modal from "@/app/UI/Modal/Modal";
import { days, hoursRanges } from "@/data/scheadule";
import classes from "./LessonsScheadule.module.scss";
import LessonItem from "../LessonItem/LessonItem";
import { useDispatch } from "react-redux";
import { User as FirebaseUser } from "firebase/auth";
import { lessonActions } from "@/app/dashboard/redux-store/lesson-slice";
import { useAuthContext } from "@/context/AuthContext";
import useUserData from "@/hooks/useUserData";
import LoadingBody from "@/app/UI/LoadingBody/LoadingBody";
import Alert from "@/app/UI/Alert/Alert";
import { useSelector } from "react-redux";
import { RootState } from "@/app/dashboard/redux-store";
import { sendLessonData } from "@/app/dashboard/redux-store/lesson-slice";

const LessonScheadule = () => {
  const [showModal, setShowModal] = useState(false);

  const lessons = useSelector((state: RootState) => state.lessons.lessons);
  const showBadDataModal = useSelector((state: RootState) => state.lessons.showBadDataModal );
  const hasChanged = useSelector((state: RootState) => state.lessons.changed);
  const dispatch = useDispatch();

  const windowWidth = useWindowWidth();
  const user: FirebaseUser | undefined = useAuthContext();
  const { userData, loading, error } = useUserData(user?.uid || "");

  useEffect(() => {
    if (!loading) {
      dispatch(lessonActions.replaceData(userData!.lessons || []));
    }
  }, [loading, dispatch, userData]);

  useEffect(() => {
    if (hasChanged) {
      dispatch(sendLessonData(user!.uid, lessons) as any);
    }
  }, [lessons, user, hasChanged, dispatch]);

  const addLessonHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  if (loading) {
    return <LoadingBody />;
  }

  return (
    <>
      {showBadDataModal && (
        <Modal
          onClose={() => {
            dispatch(lessonActions.closeBadDataModal());
          }}
        >
          <div className={classes.error}>
            <Alert alertMessage="Lesson already exist in entered day and hour range !" />
            <button
              className={classes.confirm}
              onClick={() => {
                dispatch(lessonActions.closeBadDataModal());
              }}
            >
              Okay
            </button>
          </div>
        </Modal>
      )}
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <AddLesonForm onClose={closeModalHandler} />
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
