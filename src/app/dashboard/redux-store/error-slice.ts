import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface errorState {
  addDataError: boolean;
}

const initialState = {
  addDataError: false,
} as errorState;

const errorSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    changeAddDataError(state, action: PayloadAction<boolean>) {
      state.addDataError = action.payload;
    },
  },
});

export default errorSlice;
export const errorActions = errorSlice.actions;
