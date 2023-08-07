import { Lesson } from "@/types/Lesson";
import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import addData from "@/firebase/firestore/addData";
import { errorActions } from "./error-slice";

interface lessonState {
  lessons: Lesson[];
  changed: boolean;
  showBadDataModal: boolean;
}

interface IAction {
  payload: boolean;
  type: "errors/changeAddDataError";
}

const initialState = {
  lessons: [],
  changed: false,
  showBadDataModal: false,
} as lessonState;

const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    addLeson(state, action: PayloadAction<Lesson>) {
      const isHourAvaliable = isHourAvaliableChecker(
        state.lessons,
        action.payload
      );
      if (isHourAvaliable) {
        state.lessons.push(action.payload);
        state.changed = true;
      } else state.showBadDataModal = true;
    },
    editLesson(state, action: PayloadAction<Lesson>) {
      const arrayWithoutUpdatedLesson = state.lessons.filter(
        (filterLesson) => filterLesson.id !== action.payload.id
      );
      const isHourAvaliable = isHourAvaliableChecker(
        arrayWithoutUpdatedLesson,
        action.payload
      );
      if (isHourAvaliable) {
        state.lessons = [...arrayWithoutUpdatedLesson, action.payload];
        state.changed = true;
      } else state.showBadDataModal = true;
    },
    delateLesson(state, action: PayloadAction<number>) {
      state.changed = true;
      state.lessons = state.lessons.filter(
        (lesson) => lesson.id !== action.payload
      );
    },
    closeBadDataModal(state) {
      state.showBadDataModal = false;
    },
    replaceData(state, action: PayloadAction<Lesson[]>) {
      state.lessons = action.payload || [];
      state.changed = false;
    },
  },
});

export const isHourAvaliableChecker = (
  lessonsArray: Lesson[],
  lessonItem: Lesson
) => {
  let isHourAvaliable = true;
  const newLessonStartTimeInMinute =
    lessonItem.startTime.hour * 60 + lessonItem.startTime.minute;
  const newLessonEndTimeInMinute =
    lessonItem.endTime.hour * 60 + lessonItem.endTime.minute;
  lessonsArray.map((savedLesson) => {
    const savedLessonStartTimeInMinute =
      savedLesson.startTime.hour * 60 + savedLesson.startTime.minute;
    const savedLessonEndTimeInMinute =
      savedLesson.endTime.hour * 60 + savedLesson.endTime.minute;
    if (
      savedLesson.day === lessonItem.day &&
      newLessonStartTimeInMinute <= savedLessonEndTimeInMinute &&
      newLessonEndTimeInMinute >= savedLessonStartTimeInMinute
    ) {
      isHourAvaliable = false;
    }
  });
  return isHourAvaliable;
};

export const sendLessonData = (uid: string, lessons: Lesson[]) => {
  return async (dispatch: Dispatch<IAction>) => {
    const { error } = await addData("users", uid, {
      lessons: lessons,
    });
    if (error) {
      dispatch(errorActions.changeAddDataError(true));
      setTimeout(() => {
        dispatch(errorActions.changeAddDataError(false));
      }, 4000);
    }
  };
};

export const lessonActions = lessonSlice.actions;
export default lessonSlice;
