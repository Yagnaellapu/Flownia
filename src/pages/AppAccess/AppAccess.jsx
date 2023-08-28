import React from "react";

import { BsBoxSeam } from "react-icons/bs";
import { Cards } from "../../components";
import { menuList } from "../../constants/menu.constants";

function AppAccess() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-grow p-3 ">
        <div className="flex items-center gap-2 text-primary-text-color p-2 font-bold">
          <BsBoxSeam className="w-6 h-6" />
          <h3>{menuList.APP_ACCESS}</h3>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default AppAccess;
