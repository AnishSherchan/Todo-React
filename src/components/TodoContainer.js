import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo as removeaTodo,
  removeAllTodo,
} from "../store/slices/UserSlice";
const TodoContainer = () => {
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
  const removeallTodo = () => {
    dispatch(removeAllTodo());
  };
  return (
    <div className=" flex flex-col gap-5">
      <h1 className=" text-center font-semibold text-xl">Your Things</h1>
      <div>
        {data.todo.length > 0 ? (
          data.todo?.map((item, index) => (
            <div className="flex justify-between" key={index}>
              <p>{item}</p>
              <button
                onClick={() => {
                  removeTodo(index);
                }}
              >
                {" "}
                delete
              </button>
            </div>
          ))
        ) : (
          <div className=" flex flex-col items-center gap-7 justify-center">
            <img
              className=" h-56"
              src="/undraw_empty_re_opql.svg"
              alt="No data"
            />
            <p className=" uppercase font-semibold text-lg">No Data found!</p>
            <button
              onClick={() => addNewTask()}
              className=" px-4 py-2 bg-slate-200 border border-gray-400 rounded-3xl"
            >
              Add New Todo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
