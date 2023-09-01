import React from "react";
import Checkbox from "./Checkbox";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return <Checkbox {...rest} inputref={resolvedRef} />;
  }
);

export default IndeterminateCheckbox;
