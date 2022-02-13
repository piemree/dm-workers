import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const navSlice = createSlice({
  name: "navSlice",
  initialState,
  reducers: {
    toggle: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { toggle } = navSlice.actions;

export default navSlice.reducer;
