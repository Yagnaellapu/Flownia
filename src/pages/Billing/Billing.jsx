import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Cards } from "../../components";
import { menuList } from "../../constants/menu.constants";

function Billing() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-grow p-3 ">
        <div className="flex items-center gap-2 text-primary-text-color p-2 font-bold">
          <FiShoppingCart className="w-6 h-6" />
          <h3>{menuList.BILLING}</h3>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default Billing;
