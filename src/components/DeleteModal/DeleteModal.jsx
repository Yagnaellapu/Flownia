import React from "react";
import Modal from "../Modal/Modal";
import Buttons from "../Buttons/Buttons";

function DeleteModal({ onClose }) {
  const buttons = [
    {
      title: "Yes",
      onClick: () => {},
      type: "primary",
    },
    {
      title: "No",
      onClick: () => {},
      type: "secondary",
    },
  ];
  return (
    <Modal onClose={onClose}>
      <div className="flex-grow px-4 w-[500px] bg-white shadow-md text-black p-8">
        <div className="w-full mx-auto px-2">
          <p>Are you sure want to delete ?</p>
          <Buttons
            btnContainerClassName="flex justify-center gap-10 mt-10 "
            buttons={buttons}
          />
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;
