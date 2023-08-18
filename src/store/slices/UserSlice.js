import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      state.splice(action.payload, 1);
    },
    editTodo(state, action) {
      const { task, index } = action.payload;
      const editedTodos = state.map((item, currentIndex) =>
        currentIndex === index ? { ...item, todo: task } : item
      );
      return editedTodos;
    },

    completeTodo(state, action) {
      const { status, index } = action.payload;
      const editedTodo = state.map((item, currentIndex) =>
        currentIndex === index ? { ...item, completed: status } : item
      );
      return editedTodo;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, editTodo, completeTodo } =
  todoSlice.actions;
