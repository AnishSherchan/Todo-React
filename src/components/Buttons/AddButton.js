import React from "react";
import { Icon } from "@iconify/react";

const AddButton = ({ handleClick, bg }) => {
  return (
    <button
      onClick={() => handleClick()}
      className={`p-4 mt-4 ${bg ? "bg-[#C1C1C1]" : ""} rounded-full`}
    >
      <Icon icon="ion:add" color="#3F3D56" width="30" />
    </button>
  );
};

export default AddButton;
