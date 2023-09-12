import React from "react";
import PropTypes from "prop-types";

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  showCloseButton: PropTypes.bool,
  dynamicWidth: PropTypes.bool,
};

Modal.defaultProps = {
  showCloseButton: true,
  dynamicWidth: false,
};

function Modal({ children, showCloseButton, onClose, dynamicWidth }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`relative max-h-full shadow-lg flex items-center justify-center flex-col ${
          dynamicWidth ? "w-full" : ""
        }`}
      >
        {showCloseButton && (
          <button
            className="absolute top-4 right-4 p-2 cursor-pointer z-10"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="black"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7091 1.71004L12.2891 0.290039L6.99906 5.59004L1.70906 0.290039L0.289062 1.71004L5.58906 7.00004L0.289062 12.29L1.70906 13.71L6.99906 8.41004L12.2891 13.71L13.7091 12.29L8.40906 7.00004L13.7091 1.71004Z"
              />
            </svg>
          </button>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
