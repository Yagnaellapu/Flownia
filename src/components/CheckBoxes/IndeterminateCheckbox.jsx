import React from "react";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input
          type="checkbox"
          className="mr-2 w-4 h-4"
          ref={resolvedRef}
          {...rest}
        />
      </>
    );
  }
);

export default IndeterminateCheckbox;
