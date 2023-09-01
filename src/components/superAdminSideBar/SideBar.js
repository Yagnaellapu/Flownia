import React from "react";
import { NavLink } from "react-router-dom";
import logo3 from "../../assets/img/logo3.png";
import logo1 from "../../assets/img/logo1.png";
import { MdNavigateNext as ArrowIcon } from "react-icons/md";
import { BiHome as HomeIcon } from "react-icons/bi";
import { FiUser as UserIcon } from "react-icons/fi";

import { TfiMenuAlt } from "react-icons/tfi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { FiMail as MailIcon } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { routes } from "../../constants/routes.constants";
import { menuList } from "../../constants/menu.constants";

function SideBar({ isOpen }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path) && path !== routes.HOME;
  };

  const menus = [
    { name: menuList.HOME, path: routes.HOME, icon: <HomeIcon size={20} /> },
    {
      name: menuList.SITE_SETUP,
      path: routes.SITE_SETUP,
      icon: <AiOutlineSetting size={20} />,
    },
    {
      name: menuList.USER_SETUP,
      path: routes.USER_SETUP,
      icon: <UserIcon size={20} />,
    },
    {
      name: menuList.Z_LINKS,
      path: routes.Z_LINKS,
      icon: <TfiMenuAlt size={20} />,
    },
    {
      name: menuList.APP_ACCESS,
      path: routes.APP_ACCESS,
      icon: <BsBoxSeam size={20} />,
    },
    {
      name: menuList.NOTIFICATIONS,
      path: routes.NOTIFICATIONS,
      icon: <MailIcon size={20} />,
    },
    {
      name: menuList.BILLING,
      path: routes.BILLING,
      icon: <FiShoppingCart size={20} />,
    },
  ];

  return (
    <div className="flex h-screen sticky top-0">
      <aside
        aria-hidden={isOpen}
        className={` bg-[white] shadow-md min-h-screen ${
          isOpen ? "w-60" : "w-16"
        } duration-500 text-black-100 px-4`}
      >
        <div className="bg-white h-10 mt-1 mb-7">
          <span className="flex justify-center items-center">
            <img
              src={isOpen ? logo3 : logo1}
              alt="flowina"
              className={`${isOpen ? "w-40" : "w-8"}`}
            />
          </span>
          {isOpen ? (
            <p className="font-bold relative bottom-2 text-right mr-6">
              Version4.0A
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="mt-5 flex flex-col gap-3 relative">
          {menus?.map((menu, i) => (
            <NavLink
              to={menu?.path}
              key={i}
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#e6e1f9] bg-customBackground text-customText bg-opacity-20 rounded-md ${
                isActive(menu.path)
                  ? "bg-[#7a5cf1] text-primary-color rounded-10"
                  : ""
              }`}
            >
              <div>{menu.icon}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  isOpen && "hidden"
                } absolute left-0 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>

              {isOpen ? (
                <div className="flex w-full justify-end items-center">
                  <ArrowIcon size={20} />
                </div>
              ) : (
                ""
              )}
            </NavLink>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
