import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "../_features/post/postSlice";
import { commentSlice } from "../_features/comment/commentSlice";

export const store = configureStore({
  reducer: {
    [postSlice.reducerPath]: postSlice.reducer,
    [commentSlice.reducerPath]: commentSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postSlice.middleware).concat(commentSlice.middleware),
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
