// import React, { useState } from "react";
// import Sitesetup from "./Sitesetup/Sitesetup";
// import Usersetup from "./UserSetup/Usersetup";
// import { FiUser } from "react-icons/fi";
// import { AiOutlineSetting } from "react-icons/ai";
// import { Cards } from "../../components";
// import { Navigate, useNavigate } from "react-router-dom";

// function Setup() {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };
//   const navigate = useNavigate();
//   const handleclickUser = () => {};

//   const Setup = {
//     USERSETUP_TITLE: "User Setup",
//     SITESETUP_TITLE: "Site Setup",
//   };

//   const SetupData = [
//     {
//       label: (
//         <div className="flex items-center gap-2 h-14 text-primary-color font-bold">
//           <AiOutlineSetting className="w-6 h-6" />
//           <h3>{Setup.SITESETUP_TITLE}</h3>
//         </div>
//       ),
//       component: (
//         <div>
//           <Sitesetup />
//         </div>
//       ),
//     },
//     {
//       label: (
//         <div className="flex items-center gap-2 h-14 text-primary-color font-bold">
//           <FiUser className="w-6 h-6" />
//           <h3>{Setup.USERSETUP_TITLE}</h3>
//         </div>
//       ),
//       component: (
//         <div onClick={() => navigate(`/setup/userSetup`)}>
//           <Usersetup />
//         </div>
//       ),
//     },
//   ];
//   return (
//     <div className="flex-grow mx-6">
//       <div className="flex items-center gap-2 h-14 text-primary-color font-bold">
//         {SetupData.map((Setup, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(`/setup/userSetup`)}
//             className={`cursor-pointer ${
//               activeTab === index ? "underline mb-1" : ""
//             }  `}
//             // style={{
//             //   borderBottom: activeTab === index ? "2px solid #a855f7" : "none",
//             // }}
//           >
//             {Setup.label}
//           </div>
//         ))}
//       </div>
//       <div>{SetupData[activeTab]?.component}</div>
//     </div>
//   );
// }

// export default Setup;
