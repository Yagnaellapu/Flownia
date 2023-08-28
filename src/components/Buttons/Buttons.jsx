import React from "react";
import Button from "./Button";

function Buttons({ buttons, btnContainerClassName }) {
  return (
    <div className={btnContainerClassName}>
      {buttons.map(({ title, onClick, type }) => (
        <Button
          key={title}
          title={title}
          onClick={onClick}
          {...(type === "primary" ? { primary: true } : { secondary: true })}
        />
      ))}
    </div>
  );
}

export default Buttons;
