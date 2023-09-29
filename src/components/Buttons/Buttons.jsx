import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

Buttons.propTypes = {
  buttons: PropTypes.array.isRequired,
  btnContainerClassName: PropTypes.string.isRequired,
  
};

function Buttons({ buttons, btnContainerClassName }) {
  return (
    <div className={btnContainerClassName}>
      {buttons.map(({ title, onClick, type, className }) => (
        <Button
          key={title}
          title={title}
          onClick={onClick}
          {...(type === "primary" ? { primary: true } : { secondary: true })}
          className={className}
        />
      ))}
    </div>
  );
}

export default Buttons;
