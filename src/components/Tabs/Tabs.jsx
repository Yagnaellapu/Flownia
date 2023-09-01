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
      <div className="flex items-center bg-gray-200 gap-2 h-12 font-semibold">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={` py-3 px-4 cursor-pointer ${
              activeTab === index ? " text-violet-400" : ""
            } hover:text-violet-400  focus:outline-none`}
            style={{
              borderBottom: activeTab === index ? "2px solid #a855f7" : "none",
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab]?.component}</div>
    </div>
  );
}

export default Tabs;
