import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import PropTypes from "prop-types";
import ToolTip from "../ToolTip/ToolTip";

EditDeleteButtons.propTypes = {
  isEditActive: PropTypes.bool.isRequired,
  isDeleteActive: PropTypes.bool.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

EditDeleteButtons.defaultProps = {
  onEdit: () => {},
  onDelete: () => {},
};

function EditDeleteButtons({ isEditActive, isDeleteActive, onEdit, onDelete }) {
  return (
    <div className="flex">
      <div className="group" id="Edit">
        <FaRegEdit
          className={`cursor-pointer px-2 w-9 h-8 ${
            isEditActive ? "text-green-600" : "text-gray-400"
          }`}
          onClick={onEdit}
        />
        <ToolTip label="Edit" position="top"/>
      </div>

      <div className="group" id="Delete">
        <RiDeleteBinLine
          className={`cursor-pointer px-2 w-9 h-8 ${
            isDeleteActive ? "text-red-600" : "text-gray-400"
          }`}
          onClick={onDelete}
        />
        <ToolTip label="Delete" position="top" />
      </div>
    </div>
  );
}

export default EditDeleteButtons;
