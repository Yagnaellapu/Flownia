import React, { useEffect } from "react";
import PropTypes from "prop-types";

ToolTip.propTypes = {
  label: PropTypes.string.isRequired,
  position: PropTypes.string,
};

ToolTip.defaultProps = {
  position: "top",
};

function ToolTip({ label, position }) {
  useEffect(() => {
    const container = document.getElementById(label);
    container.classList.add("relative");
  }, [label]);

  const tooltipPositionClass = {
    top: "top-0 transform -translate-x-1/4 -translate-y-full",
    bottom: "bottom-0 transform -translate-x-1/4 translate-y-full",
    left: "left-0 transform -translate-y-8 -translate-x-full",
    right: "right-0 transform -translate-y-8 translate-x-1/2",
  }[position] || "top-0 transform -translate-x-1/2 -translate-y-full";

  return (
    <div
      className={`hidden group-hover:block bg-gray-200 text-gray-700 rounded-lg px-2 py-1 absolute bg-white font-semibold whitespace-pre text-gray-900 rounded-md shadow-lg overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-0 group-hover:duration-300 group-hover:w-fit ${tooltipPositionClass}`}
    >
      {label}
    </div>
  );
}

export default ToolTip;








// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// ToolTip.propTypes = {
//   label: PropTypes.string.isRequired,
//   position: PropTypes.string,
// };

// ToolTip.defaultProps = {
//   position: "top",
// };

// function ToolTip({ label, position }) {
//   const [containerHeight, setContainerHeight] = useState(0);
//   const [containerWidth, setContainerWidth] = useState(0);

//   useEffect(() => {
//     const container = document.getElementById(label);
//     container.classList.add("relative");
//     setContainerHeight(container.offsetHeight);
//     setContainerWidth(container.offsetWidth);
//   }, [label]);

//   const getTooltipPositionClass = () => {
//     switch (position) {
//       case "top":
//         return "top-0 transform -translate-x-1/4 -translate-y-full";
//       case "bottom":
//         return "bottom-0 transform -translate-x-1/4 translate-y-full";
//       case "left":
//         return "left-0 transform -translate-y-8 -translate-x-full";
//       case "right":
//         return "right-0 transform -translate-y-8 translate-x-1/2";
//       default:
//         return "top-0 transform -translate-x-1/2 -translate-y-full";
//     }
//   };

//   const tooltipPositionClass = getTooltipPositionClass();

//   return (
//     <div
//       className={`hidden group-hover:block bg-gray-200 text-gray-700 rounded-lg px-2 py-1 absolute bg-white font-semibold whitespace-pre text-gray-900 rounded-md shadow-lg overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-0 group-hover:duration-300 group-hover:w-fit ${tooltipPositionClass}`}
//     >
//       {label}
//     </div>
//   );
// }

// export default ToolTip;











