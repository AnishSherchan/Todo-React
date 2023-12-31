import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo as removeaTodo,
  completeTodo,
  // removeAllTodo,
} from "../../store/slices/UserSlice";
import { loadTodosFromLocalStorage } from "../../store/actions";
import SimpleModal from "../SimpleModal";
import NoData from "../NoData";
import NavItems from "../NavBar/NavItems";

const TodoItems = () => {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [Tododata, setData] = useState(null);
  const data = useSelector((state) => {
    return state.todo;
  });
  const completedTodoList = data?.filter((item) => item?.completed === true);
  const pendingTodoList = data?.filter((item) => item?.completed === false);
  let todoToRender = [];
  if (selectedFilter === "all") {
    todoToRender = data;
  } else if (selectedFilter === "completed") {
    todoToRender = completedTodoList;
  } else {
    todoToRender = pendingTodoList;
  }

  const removeTodo = (datas) => {
    const todoIndex = data.findIndex((item) => item.todo === datas);
    dispatch(removeaTodo(todoIndex));
  };
  const handelEdit = (data) => {
    setIsOpen(true);
    setData(data);
  };
  const completedTodo = (datas) => {
    const {
      item: { todo: task, completed: status },
    } = datas;
    const todoIndex = data.findIndex((item) => item.todo === task);
    const UpdateData = {
      index: todoIndex,
      status: !status, // Inverting the status value using the NOT operator (!)
    };
    // console.log(UpdateData);
    dispatch(completeTodo(UpdateData));
  };

  useEffect(() => {
    const handleUnload = (event) => {
      // Save todos to Local Storage before unloading
      localStorage.setItem("todos", JSON.stringify(data));
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(loadTodosFromLocalStorage());
  }, [dispatch]);
  return (
    <div>
      {data.length > 0 && (
        <NavItems
          setIsOpen={setIsOpen}
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
        />
      )}
      {data.length > 0 ? (
        todoToRender.length > 0 ? (
          todoToRender.map((item, index) => (
            <div
              className="flex justify-between flex-wrap bg-[#E7EAFB] p-4 rounded-3xl md:bg-white md:p-0 md:rounded-none mt-4"
              key={index}
            >
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    completedTodo({ index, item });
                  }}
                >
                  {item.completed ? (
                    <Icon
                      icon="fluent-mdl2:completed"
                      color="green"
                      width="20"
                    />
                  ) : (
                    <Icon
                      icon="system-uicons:circle"
                      color="#F29339"
                      width="25"
                    />
                  )}
                  {/* <Icon icon="system-uicons:circle" width="23" />
                  <Icon icon="fluent-mdl2:completed" color="green" width="20" /> */}
                </button>
                <p
                  className={`${
                    item.completed ? "line-through opacity-60" : ""
                  }`}
                >
                  {item.todo}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Icon
                  onClick={() => {
                    completedTodo({ index, item });
                  }}
                  icon="fluent-mdl2:completed"
                  color="green"
                  width="20"
                  className=" cursor-pointer"
                />
                <button
                  onClick={() => {
                    removeTodo(item.todo);
                  }}
                >
                  <Icon
                    icon="fluent:delete-28-regular"
                    color="red"
                    width="20"
                  />
                </button>
                <button onClick={() => handelEdit({ todo: item.todo, index })}>
                  <Icon icon="fluent:edit-20-regular" color="blue" width="20" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <NoData title="No todos!" image="/undraw_taking_notes_re_bnaf.svg" />
        )
      ) : (
        <NoData
          image="/undraw_mornings_re_cofi.svg"
          title="What kinf of day shall we have today."
          button={true}
        />
      )}
      <SimpleModal
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
          setData(null);
        }}
        modalData={Tododata}
        setData={setData}
      />
    </div>
  );
};

export default TodoItems;
