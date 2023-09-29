import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { menuList } from "../../constants/menu.constants";

function Billing() {
  return (
    <div className="flex-grow mx-6">
      <div className="flex items-center gap-2 h-14 text-primary-color font-bold">
          <FiShoppingCart className="w-6 h-6" />
          <h3>{menuList.BILLING}</h3>
        </div>
        
      </div>
  );
}

export default Billing;
