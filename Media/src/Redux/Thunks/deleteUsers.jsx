import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUsers = createAsyncThunk("users/delete", async (user) => {
  const response = await axios.delete(`http://localhost:3005/users/${user.id}`);

  // BUG FIX
  return response.data;
});

export { deleteUsers };
