import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    updateAuthState: (state, { payload }) => {
      state.state = payload;
    },
  },
});

export const { updateAuthState } = authSlice.actions;

export default authSlice.reducer;
