import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, addUsers, deleteUsers } from "../Thunks";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    isCreatingUsers: false,
    data: [],
    error: null,
  },

  extraReducers(builder) {
    // Fetching Users Data
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Adding Users
    builder.addCase(addUsers.pending, (state) => {
      // state.isLoading = true;
    });

    builder.addCase(addUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });

    builder.addCase(addUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Removing Users
    builder.addCase(deleteUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      // BUG FIX ME !!
      console.log(action);
    });
    builder.addCase(deleteUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const userReducer = usersSlice.reducer;
