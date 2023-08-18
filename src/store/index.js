import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/UserSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
  middleware: [thunk],
});
export default store;
