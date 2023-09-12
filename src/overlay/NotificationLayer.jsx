import React from "react";
import ReactDOM from "react-dom";
import OverlayManager from "./OverlayManager";

function NotificationLayer() {
  return ReactDOM.createPortal(
    <OverlayManager />,
    document.getElementById("notification-layer")
  );
}

export default NotificationLayer;
