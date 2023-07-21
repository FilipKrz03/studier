import { Lesson } from "@/types/Lesson";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface lessonState {
  lessons: Lesson[];
  isAddFormActive: boolean;
  isEditFormActive: boolean;
  isShowDelateConfrimerActive: boolean;
  isShowBadDataModal: boolean;
  isInfoModalActive:boolean , 
}

const initialState = {
  lessons: [],
  isAddFormActive: false,
  isEditFormActive: false,
  isShowDelateConfrimerActive: false,
  isShowBadDataModal: false, 
  isInfoModalActive : false , 
} as lessonState;

const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    addLeson(state, action: PayloadAction<Lesson>) {
      state.lessons.push(action.payload);
    },
    editLesson(state, action: PayloadAction<Lesson>) {
      const arrayWithoutUpdatedLesson = state.lessons.filter(
        (filterLesson) => filterLesson.id !== action.payload.id
      );
      state.lessons = [...arrayWithoutUpdatedLesson, action.payload];
    },
    delateLesson(state, action: PayloadAction<number>) {
      state.lessons = state.lessons.filter(
        (lesson) => lesson.id !== action.payload
      );
    },
    changeAddFormStatus(state, action: PayloadAction<boolean>) {
      state.isAddFormActive = action.payload;
    },
    changeEditFormStatus(state, action: PayloadAction<boolean>) {
      state.isEditFormActive = action.payload;
    },
    changeDelateConfimerStatus(state, action: PayloadAction<boolean>) {
      state.isShowDelateConfrimerActive = action.payload;
    },
    changeBadDataModalStatus(state, action: PayloadAction<boolean>) {
      state.isShowBadDataModal = action.payload;
    },
    changeInfoModalStatus(state , action:PayloadAction<boolean>){
        state.isInfoModalActive = action.payload
    }
  },
});

export const lessonActions = lessonSlice.actions;
export default lessonSlice;
