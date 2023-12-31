import React from "react";
import PropTypes from "prop-types";

Checkbox.propTypes = {
  props: PropTypes.object
  }

function Checkbox(props) {
  const isChecked = props?.checked;
  return (
    <input
      type="checkbox"
      className={`py-2 w-4 h-4 ${isChecked ? "after:bg-[primary-color]" : ""}`}
      ref={props.inputref}
      {...props}
    />
  );
}

export default Checkbox;
