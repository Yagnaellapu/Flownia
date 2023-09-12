import React, { useState } from "react";
import PropTypes from "prop-types";

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  defaultTab: PropTypes.number,
};

Tabs.defaultProps = {
  defaultTab: 0,
};

function Tabs({ tabs, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex-grow">
      <div className="flex items-center justify-center my-8 font-semibold">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`  px-16 py-2  rounded-md  uppercase duration-200  active:scale-90  cursor-pointer ${
              activeTab === index
                ? "bg-violet-500 hover:shadow-violet-700/50 text-white hover:shadow-lg  hover:bg-violet-700"
                : ""
            }  shadow-violet-700/50 focus:outline-none`}
            // style={{
            //   borderBottom: activeTab === index ? "2px solid #a855f7" : "none",
            // }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div>{tabs[activeTab]?.component}</div>
    </div>
  );
}

export default Tabs;
