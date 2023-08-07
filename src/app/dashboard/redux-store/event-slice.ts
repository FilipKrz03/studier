import { Event } from "@/types/Event";
import addData from "@/firebase/firestore/addData";
import { errorActions } from "./error-slice";
import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import dayjs from "dayjs";

interface eventsState {
  events: Event[];
  changed: boolean;
}

interface IAction {
  payload: boolean;
  type: "errors/changeAddDataError";
}

const initialState = {
  events: [],
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
      const updatedEventsArray = outdatedEventsDelater(action.payload || []);
      state.events = updatedEventsArray;
      state.changed = false;
    },
  },
});

export const outdatedEventsDelater = (eventsArray: Event[]) => {
  const updatedEventsArray = eventsArray.filter((eventItem) => {
    const isBefore =
      dayjs().isBefore(dayjs(eventItem.date), "day") ||
      dayjs().isSame(dayjs(eventItem.date), "day");
    if (isBefore) return eventItem;
  });
  return updatedEventsArray;
};

export const sendEventData = (uid: string, data: Event[]) => {
  return async (dispatch: Dispatch<IAction>) => {
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
