import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { menuList } from '../../constants/menu.constants';
import Releases2024 from './Releases2024/Releases2024';
import Tabs from "../../components/Tabs/Tabs";
import Releases2025 from './Releases2025/Releases2025';
import Releases2026 from './Releases2026/Releases2026';

function Releases() {

const tabData = [
    {
      label: "2024",
      component: (
          <div>
            <Releases2024 />
          </div>
      ),
    },
    // {
    //   label: "2025",
    //   component: (
    //       <div>
    //         {/* <Releases2025 /> */}
    //       </div>
    //   ),
    // },
    // {
    //   label: "2026",
    //   component: (
    //       <div>
    //         {/* <Releases2026 /> */}
    //       </div>
    //   ),
    // },
  ];

  return (
    <div className="flex-grow mx-6">
      {/* <div className="flex items-center gap-2 h-14 text-primary-color font-bold">
        <IoDocumentTextOutline className="w-6 h-6 " />
        <h3>{menuList.RELEASES}</h3>
      </div> */}

      <div>
        <Tabs tabs={tabData} />
      </div>
    </div>
  );
}

export default Releases;
