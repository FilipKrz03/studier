import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./event-slice";
import errorSlice from "./error-slice";
import lessonSlice from "./lesson-slice";

const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
    lessons:lessonSlice.reducer , 
    errors:errorSlice.reducer ,
  },
});
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;
