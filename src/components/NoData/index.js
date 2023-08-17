import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/UserSlice";
import AddButton from "../Buttons/AddButton";
import SimpleModal from "../SimpleModal";

const NoData = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const addNewTask = () => {
    const task = `Random todo ${Math.floor(Math.random() * 101)}`;
    dispatch(addTodo(task));
  };
  return (
    <div className=" flex flex-col mt-8 items-center gap-7 justify-center">
      <img className=" h-44" src="/undraw_mornings_re_cofi.svg" alt="No data" />
      <p className=" uppercase font-semibold opacity-60 tracking-wider text-lg">
        {title}
      </p>
      <AddButton handleClick={() => setIsOpen(true)} bg={true} />
      <SimpleModal title="Add Todo" isOpen={isOpen} closeModal={setIsOpen} />
    </div>
  );
};

export default NoData;
