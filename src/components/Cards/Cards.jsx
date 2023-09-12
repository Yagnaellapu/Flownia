import React from "react";
import { LuSignal } from "react-icons/lu";
import { MdLocalMall } from "react-icons/md";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      percentage: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

const cardsData = [
  {
    icon: <MdLocalMall className="text-blue-600 w-[22px] h-[22px]" />,
    percentage: "30%",
    content: "4.510",
    title: "Facility",
  },
  {
    icon: <BiSolidPieChartAlt2 className="text-red-500 w-[22px] h-[22px]" />,
    percentage: "30%",
    content: "4.510",
    title: "Tank",
  },
  {
    icon: <MdLocalMall className="text-blue-600 w-[22px] h-[22px]" />,
    percentage: "30%",
    content: "4.510",
    title: "Tank Product",
  },
  {
    icon: <LuSignal className="text-yellow-500 w-[22px] h-[22px]" />,
    percentage: "30%",
    content: "4.510",
    title: "Mid Grade",
  },
  {
    icon: <LuSignal className="text-yellow-500 w-[22px] h-[22px]" />,
    percentage: "30%",
    content: "4.510",
    title: "TBD",
  },
];

Cards.defaultProps = {
  cards: cardsData,
};

function Cards({ cards
 }) {
  return (
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
                    title === "TBD" || title === "Mid Grade"
                      ? "bg-red-500"
                      : title === "Tank"
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
  );
}

export default Cards;
