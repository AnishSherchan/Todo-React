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

      const editedTodo = state.map((item, index) =>
        index === action.payload.data ? action.payload.t : item
      );

      return editedTodo;
    },

    removeAllTodo(state, action) {
      return [];
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, editTodo, removeAllTodo } =
  todoSlice.actions;
