import React from "react";

function Button({ title, onClick, primary, secondary, className }) {
  const type = primary
    ? "hover:bg-violet-700 hover:shadow-violet-700/50"
    : secondary
    ? "hover:bg-orange-700 hover:shadow-orange-700/50"
    : null;
  return (
    <button
      className={` ${className} px-12 py-1 border-2 rounded-md  mr-8 ${type} uppercase transition duration-200 hover:text-white hover:shadow-lg hover:border-transparent active:transform active:rotate-x-15 active:scale-90`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
