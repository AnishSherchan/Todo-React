import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo as removeaTodo,
  // removeAllTodo,
} from "../../store/slices/UserSlice";
import SimpleModal from "../SimpleModal";
import NoData from "../NoData";
import AddButton from "../Buttons/AddButton";

const TodoItems = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [Tododata, setData] = useState(null);
  const data = useSelector((state) => {
    return state.todo;
  });
  const removeTodo = (data) => {
    dispatch(removeaTodo(data));
  };
  const handelEdit = (data) => {
    setIsOpen(true);
    setData(data);
  };
  return (
    <div>
      {data.length > 0 && (
        <div className=" flex justify-end">
          <AddButton
            handleClick={() => {
              setIsOpen(true);
            }}
            bg={false}
          />
        </div>
      )}
      {data.length > 0 ? (
        data?.map((item, index) => (
          <div className="flex justify-between mt-6" key={index}>
            <div className=" flex gap-3">
              <button
                onClick={() => {
                  // edit(index);
                }}
              >
                {" "}
                <Icon icon="fluent-mdl2:completed" color="green" width="20" />
              </button>
              <p>{item.todo}</p>
            </div>
            <div className=" flex gap-2">
              <button
                onClick={() => {
                  removeTodo(index);
                }}
              >
                {" "}
                <Icon icon="fluent:delete-28-regular" color="red" width="20" />
              </button>
              <button onClick={() => handelEdit({ todo: item.todo, index })}>
                {" "}
                <Icon icon="fluent:edit-20-regular" color="blue" width="20" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <NoData title="What kinf of day shall we have today." />
      )}
      <SimpleModal
        title="Add Todo"
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
