import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../Thunks/fetchUsers";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },

  extraReducers(builder) {
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
  },
});

export const userReducer = usersSlice.reducer;
