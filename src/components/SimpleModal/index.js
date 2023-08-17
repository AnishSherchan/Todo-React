import React from "react";
import { Icon } from "@iconify/react";

const SimpleModal = ({ isOpen, closeModal, title, data }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } transition-opacity duration-1000 ease-in-out z-20 fixed inset-0`}
    >
      <div
        onClick={() => closeModal(false)}
        className="bg-black h-screen w-full opacity-30 fixed left-0 top-0 bottom-0"
      ></div>

      <div className=" absolute inset-0 max-w-md h-min rounded-2xl p-5 mx-auto my-auto bg-white">
        <h1 className=" text-lg font-semibold">{title}</h1>
        <form className=" my-6">
          <input
            type="text"
            className={`  border rounded-lg  w-full p-2.5 focus:outline-none`}
          />
        </form>
        <div className="flex justify-end gap-3 mt-9">
          <button
            onClick={() => {
              closeModal(false);
            }}
            className=" text-white  bg-[#3F3D56] rounded-full p-2 px-3"
          >
            Add Todo
          </button>
          <button
            onClick={() => {
              closeModal(false);
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
