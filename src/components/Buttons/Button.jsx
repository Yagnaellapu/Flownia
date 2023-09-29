import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  primary: false,
  secondary: false,
  className: "w-40 px-2",
};

function Button({ title, onClick, primary, secondary, className }) {
  const type = primary
    ? "hover:bg-violet-700 hover:shadow-violet-700/50"
    : secondary
    ? "hover:bg-orange-700 hover:shadow-orange-700/50"
    : null;

  return (
    <button
      className={`${
        className && className
      }  px-12 py-1 border-2 border-violet-400 hover:font-bold rounded-md ${type} uppercase duration-200 hover:text-white hover:shadow-lg hover:border-transparent active:scale-90 
      }`}
      onClick={onClick} 
    >
      {title}
    </button>
  );
}

export default Button;
