import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import PropTypes from "prop-types";

EditDeleteButtons.propTypes = {
  isEditActive: PropTypes.bool.isRequired,
  isDeleteActive: PropTypes.bool.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

EditDeleteButtons.defaultProps = {
    onEdit: () => {},
    onDelete: () => {}
}

function EditDeleteButtons({ isEditActive, isDeleteActive, onEdit, onDelete }) {
  return (
    <div className="flex gap-3">
      <FaRegEdit
        className={` bg-gray-300 fill-gray-600 rounded-full px-2 w-9 h-8 ${
          isEditActive && "bg-green-400"
        }`}
        onClick={onEdit}
      />
      <RiDeleteBinLine
        className={`bg-gray-300 fill-gray-600 rounded-full px-2 w-9 h-8  ${
          isDeleteActive && "bg-red-400"
        }`}
        onClick={onDelete}
      />
    </div>
  );
}

export default EditDeleteButtons;
