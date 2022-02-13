import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import navSlice from "./slices/navSlice";
import rootSlice from "./slices/rootSlice";

export const store = configureStore({
  reducer: {
    navState: navSlice,
    auth:authSlice,
    root:rootSlice
  },
});
