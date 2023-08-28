import React, { useState } from "react";
import { MdAppShortcut } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FcManager } from "react-icons/fc";
import { MdAccountBox } from "react-icons/md";
import { Cards } from "../../components";

function Usersetup() {
  const [cards] = useState([
    {
      icon: <PiUsersThreeFill className="text-blue-600 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
      footerText: "Corporate User",
    },
    {
      icon: <FaUserTie className="text-red-600 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
      footerText: "Owner",
    },
    {
      icon: <FcManager className="text-blue-600 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
      footerText: "Manager",
    },
    {
      icon: <MdAppShortcut className="text-pink-500 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
      footerText: "App User",
    },
    {
      icon: <MdAccountBox className="text-yellow-500 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
      footerText: "Accountant",
    },
  ]);
  return (
    <div className="flex h-full flex-col">
      <div className="flex-grow p-3 ">
        <div className="flex items-center gap-2 text-primary-text-color p-2 font-bold">
          <FiUser className="w-6 h-6" />
          <h3>User Setup</h3>
        </div>
        <Cards cards={cards} />
      </div>
    </div>
  );
}

export default Usersetup;
