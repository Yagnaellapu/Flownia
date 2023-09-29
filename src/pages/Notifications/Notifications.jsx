// import React, { useState } from "react";
// import { FaSms } from "react-icons/fa";
// import { FiMail as MailIcon } from "react-icons/fi";
// import { RiMessage2Line } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import { TbLicense } from "react-icons/tb";



// function Notifications() {

// const Notification = {
//   TITLE: "Notifications",
// };

// const [cards] = useState([
//   {
//     icon: <RiMessage2Line className="text-blue-600 w-[22px] h-[22px]" />,
//     percentage: "30%",
//     content: "4.510",
//     title: "Scrolling Message",
//   },
//   {
//     icon: <FaSms className="text-red-600 w-[22px] h-[22px]" />,
//     percentage: "30%",
//     content: "4.510",
//     title: "Sms Notification",
//   },
//   {
//     icon: <TbLicense className="text-blue-600 w-[22px] h-[22px]" />,
//     percentage: "30%",
//     content: "4.510",
//     title: "License Notification",
//   },
//   {
//     icon: <RiMessage2Line className="text-pink-500 w-[22px] h-[22px]" />,
//     percentage: "30%",
//     content: "4.510",
//     title: "TBD",
//   },
//   {
//     icon: <FaSms className="text-yellow-500 w-[22px] h-[22px]" />,
//     percentage: "30%",
//     content: "4.510",
//     title: "TBD",
//   },
// ]);

//   return (
//     <div className="flex-grow mx-6">
//       <div className="flex items-center gap-2 h-14 text-primary-color font-bold">
//         <MailIcon className="w-6 h-6" />
//         <h3>{Notification.TITLE}</h3>
//       </div>
//       <div className="grid grid-cols-5 gap-6 px-3 mt-4">
//         {cards.map(({ icon, percentage, content, title }) => (
//           <div
//             className="w-full hover:scale-110 ease-in duration-300"
//             key={title}
//           >
//             <Link to={`${title.toLowerCase()}`} className="block">
//               <div className="relative bg-white p-4 h-32 rounded-md shadow-lg">
//                 {/* <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-gray-200 to-transparent"></div> */}
//                 <div className="flex items-center justify-between">
//                   {icon}
//                   <div
//                     className={` ${
//                       title === "TBD" || title === "TBD"
//                         ? "bg-red-500"
//                         : title === "Sms Notification"
//                         ? "bg-yellow-500"
//                         : "bg-green-500"
//                     } "w-fit-content p-0 px-2 rounded-xl h-auto rounded-20 bg-green-400 text-white flex justify-center items-center"`}
//                   >
//                     {percentage}
//                   </div>
//                 </div>
//                 <div className="py-2 text-2xl font-bold">{content}</div>
//                 <div>{title}</div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Notifications;
