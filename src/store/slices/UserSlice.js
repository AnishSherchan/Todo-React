import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      // console.log(action.payload);
      state.splice(action.payload, 1);
    },
    removeAllTodo(state, action) {
      return [];
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, removeAllTodo } = todoSlice.actions;
