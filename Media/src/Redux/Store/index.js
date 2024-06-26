import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
