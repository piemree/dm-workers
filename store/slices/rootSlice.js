import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  drawer: false,
};

export const rootSlice = createSlice({
  name: "rootSlice",
  initialState,
  reducers: {
    setLoadingState: (state, { payload }) => {
      state.loading = payload;
    },
    setDrawerState: (state, { payload }) => {
      state.drawer = payload;
    },
  },
});

export const { setLoadingState, setDrawerState } = rootSlice.actions;

export default rootSlice.reducer;
