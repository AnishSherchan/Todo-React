import React from "react";
import AddButton from "../Buttons/AddButton";

const NavItems = ({ selectedFilter, setSelectedFilter, setIsOpen }) => {
  const selectedFilters = selectedFilter;
  return (
    <div className=" flex justify-between items-center">
      <div className=" flex gap-7">
        <p
          className={` cursor-pointer${
            selectedFilters === "all"
              ? " font-semibold underline underline-offset-4"
              : ""
          }`}
          onClick={() => setSelectedFilter("all")}
        >
          All Todo
        </p>
        <p
          className={` cursor-pointer ${
            selectedFilter === "pending"
              ? " font-semibold underline underline-offset-4"
              : ""
          }`}
          onClick={() => setSelectedFilter("pending")}
        >
          Pending
        </p>
        <p
          className={` cursor-pointer${
            selectedFilter === "completed"
              ? " font-semibold underline underline-offset-4"
              : ""
          }`}
          onClick={() => setSelectedFilter("completed")}
        >
          Completed
        </p>
      </div>
      <div className=" flex justify-end">
        <AddButton
          handleClick={() => {
            setIsOpen(true);
          }}
          bg={false}
        />
      </div>
    </div>
  );
};

export default NavItems;
