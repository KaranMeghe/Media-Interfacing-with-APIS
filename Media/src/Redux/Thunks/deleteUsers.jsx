import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUsers = createAsyncThunk("users/delete", async (user) => {
  const resposne = await axios.delete(`http://localhost:3005/users/${user.id}`);
  console.log(resposne.data);
  return resposne.data;
});

export { deleteUsers };
