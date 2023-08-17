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
    editTodo(state, action) {
      console.log(action.payload);
      console.log(state);
      const { task, index } = action.payload;
      const editedTodos = state.map((item, currentIndex) =>
        currentIndex === index ? { ...item, todo: task } : item
      );
      return editedTodos;
    },

    removeAllTodo(state, action) {
      return [];
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, editTodo, removeAllTodo } =
  todoSlice.actions;
