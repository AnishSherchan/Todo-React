import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addTodo, editTodo } from "../../store/slices/UserSlice";

const SimpleModal = ({ isOpen, closeModal, title, modalData }) => {
  const dispatch = useDispatch();

  //Importing React Hook form for validating user input
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const StateArray = useSelector((state) => {
    return state.todo;
  });

  const onSubmit = (data) => {
    if (modalData) {
      const { todo: task } = modalData;
      const todoIndex = StateArray.findIndex((item) => item.todo === task);
      const updatedTodo = { task: data.todo, index: todoIndex };
      dispatch(editTodo(updatedTodo));
    } else {
      // completed false means its is not completed
      const todo = { ...data, completed: false };
      dispatch(addTodo(todo));
    }
    closeModal();
    reset();
  };

  //Pre filling input field with user's todo Data
  useEffect(() => {
    if (modalData) {
      setValue("todo", modalData.todo);
    } else {
      reset();
    }
    /* eslint-disable-next-line */
  }, [modalData]);

  // useEffect(() => {
  //   console.log(StateArray.length);
  //   if (StateArray.length >= 0) {
  //     const dataString = JSON.stringify(StateArray);
  //     localStorage.setItem("todos", dataString);
  //   }
  //   /* eslint-disable-next-line */
  // }, [StateArray]);

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } transition-opacity duration-1000 ease-in-out z-20 fixed inset-0`}
    >
      <div
        onClick={() => {
          closeModal();
          reset();
        }}
        className="bg-black h-screen w-full opacity-30 fixed left-0 top-0 bottom-0"
      ></div>

      <div className=" absolute inset-0 max-w-md h-min rounded-2xl p-5 mx-auto my-auto bg-white">
        <h1 className=" text-lg font-semibold">{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className=" my-6">
          <input
            type="text"
            {...register("todo", {
              required: "Field is empty!",
              maxLength: {
                value: 20,
                message: "Exceeds maximum length of 20 characters!",
              },
            })}
            className={` 
              ${errors.todo ? "border-red-500 focus:ring-red-500" : ""}
              border rounded-lg  w-full p-2.5 focus:outline-none`}
          />

          <label className="text-red-500 text-xs">{errors.todo?.message}</label>
        </form>
        <div className="flex justify-end gap-3 mt-9">
          <button
            onClick={handleSubmit(onSubmit)}
            className=" text-white  bg-[#3F3D56] rounded-full p-2 px-3"
          >
            Add Todo
          </button>
          <button
            onClick={() => {
              closeModal();
              reset();
            }}
            className=" text-[#3F3D56] font-semibold  bg-[#C1C1C1] rounded-full p-2 px-3"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleModal;
