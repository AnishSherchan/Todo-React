import React, { useState } from "react";
import AddButton from "../Buttons/AddButton";
import SimpleModal from "../SimpleModal";

const NoData = ({ title, button, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" flex flex-col flex-wrap mt-8 items-center gap-7 justify-center">
      <img className=" h-44" src={image} alt="No data" />
      <p className=" text-center uppercase font-semibold opacity-60 tracking-wider text-lg">
        {title}
      </p>
      {button && <AddButton handleClick={() => setIsOpen(true)} bg={true} />}
      <SimpleModal title="Add Todo" isOpen={isOpen} closeModal={setIsOpen} />
    </div>
  );
};

export default NoData;
