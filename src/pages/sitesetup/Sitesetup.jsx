import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

import { Cards } from "../../components";

const siteSetup = {
  TITLE: "Site Setup",
};

function Sitesetup() {
  // const [cards] = useState([
  //   {
  //     title: siteSetupCategories.FACILITY,
  //     icon: <MdLocalMall className="text-blue-600 w-[22px] h-[22px]" />,
  //     percentage: "30%",
  //     content: "4.510",
  //   },
  //   {
  //     title: siteSetupCategories.TANK,
  //     icon: <BiSolidPieChartAlt2 className="text-red-500 w-[22px] h-[22px]" />,
  //     percentage: "30%",
  //     content: "4.510",
  //   },
  //   {
  //     title: siteSetupCategories.TANK_PRODUCT,
  //     icon: <MdLocalMall className="text-blue-600 w-[22px] h-[22px]" />,
  //     percentage: "30%",
  //     content: "4.510",
  //   },
  //   {
  //     title: siteSetupCategories.MID_GRADE,
  //     icon: <LuSignal className="text-yellow-500 w-[22px] h-[22px]" />,
  //     percentage: "30%",
  //     content: "4.510",
  //   },
  //   {
  //     title: siteSetupCategories.TBD,
  //     icon: <LuSignal className="text-yellow-500 w-[22px] h-[22px]" />,
  //     percentage: "30%",
  //     content: "4.510",
  //   },
  // ]);
  return (
    <div className="flex-grow mx-6">
      <div className="flex items-center gap-2 h-14 text-primary-color font-bold">
        <AiOutlineSetting className="w-6 h-6" />
        <h3>{siteSetup.TITLE}</h3>
      </div>
      <Cards />
    </div>
  );
}

export default Sitesetup;
