import React from "react";
import PropTypes from "prop-types";

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

TextField.defaultProps = {
  value: "",
  onChange: () => {},
  disabled: false,
};

function TextField({ type, label, onChange, value, placeholder, disabled, className }) {
  return (
    <div className="w-full">
      <label className="block mb-2 font-medium">{label}</label>
      <input
        type={type}
        className={`${className} w-full border-2 border-violet-400 rounded-lg py-2 px-3 focus:outline-none focus:border-violet-400 focus:ring-violet-400 block focus:ring-3`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={12}
        disabled={disabled}
      />
    </div>
  );
}

export default TextField;

