import React from "react";
import { LuSignal } from "react-icons/lu";
import { MdLocalMall } from "react-icons/md";
import { BiSolidPieChartAlt2 } from "react-icons/bi";

const cardsData = [
  {
    icon: <MdLocalMall className="text-blue-600 w-[22px] h-[22px]" />,
    percentage: "30%",
    content: "4.510",
    footerText: "Facility",
  },
  {
    icon: <BiSolidPieChartAlt2 className="text-red-500 w-[22px] h-[22px]" />,
    percentage: "30%",
    content: "4.510",
    footerText: "Tank",
  },
  {
    icon: <MdLocalMall className="text-blue-600 w-[22px] h-[22px]" />,
    percentage: "30%",
    content: "4.510",
    footerText: "Tank Product",
  },
  {
    icon: <LuSignal className="text-yellow-500 w-[22px] h-[22px]" />,
    percentage: "30%",
    content: "4.510",
    footerText: "Mid Grade",
  },
  {
    icon: <LuSignal className="text-yellow-500 w-[22px] h-[22px]" />,
    percentage: "30%",
    content: "4.510",
    footerText: "TBD",
  },
];

function Cards({ cards = cardsData }) {
  return (
    <div className="grid grid-cols-5 gap-5 px-3 mt-4">
      {cards.map(({ icon, percentage, content, footerText }) => (
        <div
          className="w-full hover:scale-110 ease-in duration-300"
          key={footerText}
        >
          <div className="bg-white p-4 h-32 rounded-md shadow-lg">
            <div className="flex items-center justify-between">
              {icon}
              <div
                className={` ${
                  footerText === "TBD" || footerText === "Mid Grade"
                    ? "bg-red-500"
                    : footerText === "Tank"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                } "w-fit-content p-0 px-2 rounded-xl h-auto rounded-20 bg-green-400 text-white flex justify-center items-center"`}
              >
                {percentage}
              </div>
            </div>
            <div className="py-2 text-2xl font-bold">{content}</div>
            <div>{footerText}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
