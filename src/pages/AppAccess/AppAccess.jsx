import React from "react";

import { BsBoxSeam } from "react-icons/bs";
import { menuList } from "../../constants/menu.constants";

function AppAccess() {
  return (
    <div className="flex-grow mx-6">
      <div className="flex items-center gap-2 h-14 text-primary-color font-bold">
        <BsBoxSeam className="w-6 h-6" />
        <h3>{menuList.APP_ACCESS}</h3>
      </div>
    </div>
  );
}

export default AppAccess;
