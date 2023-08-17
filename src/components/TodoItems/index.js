import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo as removeaTodo,
  // removeAllTodo,
  editTodo,
} from "../../store/slices/UserSlice";
import NoData from "../NoData";
import AddButton from "../Buttons/AddButton";

const TodoItems = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state;
  });
  const addNewTask = () => {
    const task = `Random todo ${Math.floor(Math.random() * 101)}`;
    dispatch(addTodo(task));
  };
  const removeTodo = (data) => {
    // console.log(data);
    dispatch(removeaTodo(data));
  };
  const edit = (data) => {
    let t = "ttt";
    dispatch(editTodo({ t, data }));
  };
  return (
    <div>
      {data.todo.length > 0 && (
        <div className=" flex justify-end">
          <AddButton handleClick={addNewTask} bg={false} />
        </div>
      )}
      {data.todo.length > 0 ? (
        data.todo?.map((item, index) => (
          <div className="flex justify-between" key={index}>
            <p>{item}</p>
            <div className=" flex gap-2">
              <button
                onClick={() => {
                  removeTodo(index);
                }}
              >
                {" "}
                delete
              </button>
              <button
                onClick={() => {
                  edit(index);
                }}
              >
                {" "}
                edit
              </button>
            </div>
          </div>
        ))
      ) : (
        <NoData title="What kinf of day shall we have today." />
      )}
    </div>
  );
};

export default TodoItems;
