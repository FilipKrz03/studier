import { Event } from "@/types/Event";
import addData from "@/firebase/firestore/addData";
import { errorActions } from "./error-slice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface eventsState {
  events: Event[];
  changed: boolean;
}

const initialState = {
  events:[] ,
  changed: false,
} as eventsState;

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<Event>) {
      state.changed = true;
      state.events.push(action.payload);
    },
    delateEvent(state, action: PayloadAction<number>) {
      state.changed = true;
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },
    editEvent(state, action: PayloadAction<Event>) {
      state.changed = true;
      state.events = state.events.map((eventItem) => {
        if (eventItem.id === action.payload.id) return action.payload;
        else return eventItem;
      });
    },
    replaceData(state, action: PayloadAction<Event[]>) {
      state.events = action.payload || [];
      state.changed = false;
    },
  },
});

export const sendEventData = (uid: string, data: Event[]) => {
  return async (dispatch: any) => {
    const { error } = await addData("users", uid, {
      events: data,
    });
    if (error) {
      dispatch(errorActions.changeAddDataError(true));
      setTimeout(() => {
        dispatch(errorActions.changeAddDataError(false));
      }, 4000);
    }
  };
};
export const eventActions = eventsSlice.actions;
export default eventsSlice;
