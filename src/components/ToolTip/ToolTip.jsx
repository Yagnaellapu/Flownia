import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

ToolTip.propTypes = {
  label: PropTypes.string.isRequired,
  position: PropTypes.string,
};

ToolTip.defaultProps = {
  position: "top",
};

const positionTypes = {
  top: "y",
  left: "x",
  right: "x",
  bottom: "y",
};

function ToolTip({ label, position }) {
  const [containerHeight, setContainerHeight] = useState("0");
  const [containerWidth, setContainerWidth] = useState("0");

  useEffect(() => {
    const container = document.getElementById(label);
    container.classList.add("relative");
    setContainerHeight(container.offsetHeight);
    setContainerWidth(container.offsetWidth);
  }, []);

  const translateX =
    position === "left"
      ? `-translate-x-[${containerWidth}px] -translate-y-[${containerHeight}px]`
      : `translate-x-[${containerWidth}px] -translate-y-[${containerHeight}px]`;

  const translateY =
    position === "top"
      ? `-translate-y-[${containerHeight}px]`
      : `translate-y-[${containerHeight}px]`;

  const translate = positionTypes[position] === "x" ? translateX : translateY;

  return (
    <div
      className={`hidden group-hover:block bg-gray-200 text-gray-700 rounded-lg px-2 py-1 absolute ${position}-0 ${translate}  bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg  overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-0 group-hover:duration-300 group-hover:w-fit`}
    >
      {label}
    </div>
  );
}

export default ToolTip;
