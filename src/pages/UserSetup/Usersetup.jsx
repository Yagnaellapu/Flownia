import React, { useState } from "react";
import { MdAppShortcut } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FcManager } from "react-icons/fc";
import { MdAccountBox } from "react-icons/md";
import { Cards } from "../../components";
import { Link } from "react-router-dom";

function Usersetup() {

  const UserSetup = {
    TITLE: "User Setup",
  };
  const [cards] = useState([
    {
      icon: <PiUsersThreeFill className="text-blue-600 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
      title: "Corporate User",
    },
    {
      icon: <FaUserTie className="text-red-600 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
      title: "Owner",
    },
    {
      icon: <FcManager className="text-blue-600 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
      title: "Manager",
    },
    {
      icon: <MdAppShortcut className="text-pink-500 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
      title: "App User",
    },
    {
      icon: <MdAccountBox className="text-yellow-500 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
      title: "Accountant",
    },
  ]);
  return (
    <div className="flex-grow mx-6">
      <div className="flex items-center gap-2 h-14 text-primary-color font-bold">
        <FiUser className="w-6 h-6" />
        <h3>{UserSetup.TITLE}</h3>
      </div>
      <div className="grid grid-cols-5 gap-6 px-3 mt-4">
        {cards.map(({ icon, percentage, content, title }) => (
          <div
            className="w-full hover:scale-110 ease-in duration-300"
            key={title}
          >
            <Link to={`${title.toLowerCase()}`} className="block">
              <div className="relative bg-white p-4 h-32 rounded-md shadow-lg">
                {/* <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-gray-200 to-transparent"></div> */}
                <div className="flex items-center justify-between">
                  {icon}
                  <div
                    className={` ${
                      title === "Accountant" || title === "App User"
                        ? "bg-red-500"
                        : title === "Owner"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    } "w-fit-content p-0 px-2 rounded-xl h-auto rounded-20 bg-green-400 text-white flex justify-center items-center"`}
                  >
                    {percentage}
                  </div>
                </div>
                <div className="py-2 text-2xl font-bold">{content}</div>
                <div>{title}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Usersetup;
