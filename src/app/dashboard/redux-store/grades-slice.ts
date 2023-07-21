import { Grade, Subject } from "@/types/Grade";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import addData from "@/firebase/firestore/addData";
import { errorActions } from "./error-slice";

interface gradesState {
  subjects: Subject[];
  changed: boolean;
}

const initialState = {
  subjects: [],
  changed: false,
} as gradesState;

const gradesSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {
    addGrade(state, action: PayloadAction<Grade>) {
      state.changed = true;
      let isSubjectExisting = false;
      const subjectsArray = state.subjects;
      subjectsArray.map((subject) => {
        if (action.payload.subject === subject.subject) {
          subject.grades.push(action.payload);
          isSubjectExisting = true;
          return;
        }
      });
      if (!isSubjectExisting) {
        subjectsArray.push({
          subject: action.payload.subject,
          grades: [action.payload],
        });
      }
    },
    removeGrade(state, action: PayloadAction<number>) {
      state.changed = true;
      const arrayWithoutGrade = state.subjects.map((subject) => {
        const filteredGrades = subject.grades.filter(
          (grade) => grade.id !== action.payload
        );
        return { subject: subject.subject, grades: filteredGrades };
      });
      const arrayWithoutEmptySubjects = arrayWithoutGrade.filter(
        (subject) => subject.grades.length !== 0
      );
      state.subjects = arrayWithoutEmptySubjects;
    },
    changeGrade(state, action: PayloadAction<Grade>) {
      state.changed = true;
      const subjectsArray = state.subjects.map((subject) => {
        const changedGrades = subject.grades.map((gradeItem) => {
          if (
            gradeItem.id === action.payload.id &&
            action.payload.subject === gradeItem.subject
          ) {
            return action.payload;
          } else {
            return gradeItem;
          }
        });
        return { subject: subject.subject, grades: changedGrades };
      });
      state.subjects = subjectsArray;
    },
    replaceData(state, action: PayloadAction<Subject[]>) {
      state.subjects = action.payload;
      state.changed = false;
    },
  },
});

export const sendGradesData = (uid: string, subjectData: Subject[]) => {
  return async (dispatch: any) => {
    const { error } = await addData("users", uid, {
      subjects: subjectData,
    });
    if (error) {
      dispatch(errorActions.changeAddDataError(true));
      setTimeout(() => {
        dispatch(errorActions.changeAddDataError(false));
      }, 4000);
    }
  };
};

export default gradesSlice;
export const gradesActions = gradesSlice.actions;
