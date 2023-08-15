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
console.log(todoSlice);

export default todoSlice.reducer;
