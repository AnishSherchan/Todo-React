import { setTodos } from "../slices/UserSlice"; // Import your slice's action creator

export const loadTodosFromLocalStorage = () => {
  return (dispatch) => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      dispatch(setTodos(parsedTodos)); // Dispatch the action to update Redux state
    }
  };
};
