import React from "react";

const TodoContainer = () => {
  return (
    <div>
      <h2 className=" text-center my-4">List of Todo</h2>
      <div className="flex items-center justify-end px-4">
        <button className=" px-4 py-2 bg-slate-200 border border-gray-400 rounded-3xl">
          Add New Todo
        </button>
      </div>
    </div>
  );
};

export default TodoContainer;
