import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {},
    removeTodo(state, action) {},
    removeAllTodo(state, action) {},
  },
});

export default todoSlice.reducer;
