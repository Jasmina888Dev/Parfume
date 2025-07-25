import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    todoRed: TodoSlice,
  },
});
