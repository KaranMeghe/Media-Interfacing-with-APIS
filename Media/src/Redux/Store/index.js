import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export * from "../Thunks/fetchUsers";
export * from "../Thunks/addUsers";
export * from "../Thunks/deleteUsers";
