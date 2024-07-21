import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userReducer } from "../Slices/usersSlice";
import { albumsApi } from "../Apis/albumApi";

export const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "../Thunks/fetchUsers";
export * from "../Thunks/addUsers";
export * from "../Thunks/deleteUsers";
export { useFetchAlbumsQuery, useAddAlbumMutation } from "../Apis/albumApi";
