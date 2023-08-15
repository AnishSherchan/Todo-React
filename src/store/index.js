import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
export default store;
