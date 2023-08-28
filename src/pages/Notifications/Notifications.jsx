import React from "react";

import { FiMail } from "react-icons/fi";
import { Cards } from "../../components";
import { menuList } from "../../constants/menu.constants";

function Notifications() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow p-3 ">
        <div className="flex items-center gap-2 text-primary-text-color p-2 font-bold">
          <FiMail className="w-6 h-6" />
          <h3>{menuList.NOTIFICATIONS}</h3>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default Notifications;
