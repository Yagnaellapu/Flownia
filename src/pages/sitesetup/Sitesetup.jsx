import React, { useState } from "react";
import { LuSignal } from "react-icons/lu";
import { MdLocalMall } from "react-icons/md";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { siteSetupCategories } from "./siteSetup.utils";

const siteSetup = {
  TITLE: "Site Setup",
};

function Sitesetup() {
  const [cards] = useState([
    {
      title: siteSetupCategories.FACILITY,
      icon: <MdLocalMall className="text-blue-600 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
    },
    {
      title: siteSetupCategories.TANK,
      icon: <BiSolidPieChartAlt2 className="text-red-500 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
    },
    {
      title: siteSetupCategories.TANK_PRODUCT,
      icon: <MdLocalMall className="text-blue-600 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
    },
    {
      title: siteSetupCategories.MID_GRADE,
      icon: <LuSignal className="text-yellow-500 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
    },
    {
      title: siteSetupCategories.TBD,
      icon: <LuSignal className="text-yellow-500 w-[22px] h-[22px]" />,
      percentage: "30%",
      content: "4.510",
    },
  ]);
  return (
    <div className="flex h-full flex-col">
      <div className="flex-grow p-3 ">
        <div className="flex items-center gap-2 text-primary-text-color p-2 font-bold">
          <AiOutlineSetting className="w-6 h-6" />
          <h3>{siteSetup.TITLE}</h3>
        </div>
        <div className="grid grid-cols-5 gap-5 px-3 mt-4">
          {cards.map(({ icon, percentage, content, title }) => (
            <div
              className="w-full hover:scale-110 ease-in duration-300"
              key={title}
            >
              <Link to={`/sitesetup/${title.toLowerCase()}`} className="block">
                <div className="bg-white p-4 h-32 rounded-md shadow-lg">
                  <div className="flex items-center justify-between">
                    {icon}
                    <div
                      className={` ${
                        title === siteSetupCategories.TBD ||
                        title === siteSetupCategories.MID_GRADE
                          ? "bg-red-500"
                          : title === siteSetupCategories.TANK
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
    </div>
  );
}

export default Sitesetup;
