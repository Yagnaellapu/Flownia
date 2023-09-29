import React, { useState } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { menuList } from "../../constants/menu.constants";
import { NavLink } from "react-router-dom";
import logo3 from "../../assets/img/logo3.png";
import logo1 from "../../assets/img/logo1.png";
import { MdNavigateNext as ArrowIcon } from "react-icons/md";
import { BiHome as HomeIcon } from "react-icons/bi";
import { FiUser, FiUser as UserIcon } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { FiMail as MailIcon } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { routes } from "../../constants/routes.constants";
import { IoDocumentTextOutline } from "react-icons/io5";
import Button from "../Buttons/Button";
import { GrUserSettings } from "react-icons/gr";

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};


function Header() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isActive = (path) => {
    if (path === routes.HOME) {
      // Check if the current location pathname is exactly the home route.
      return location.pathname === path;
    }
    // For other routes, check if the current location pathname starts with the specified path.
    return location.pathname.startsWith(path);
  };

  const menus = [
    { name: menuList.HOME, path: routes.HOME, icon: <HomeIcon size={20} /> },
    {
      name: menuList.SETUP,
      path: null,
      icon: <GrUserSettings size={20} />,
      subMenus: [
        {
      name: menuList.SITE_SETUP,
      path: routes.SITE_SETUP,
      icon: <AiOutlineSetting size={20} />,
    },
    {
      name: menuList.USER_SETUP,
      path: routes.USER_SETUP,
          icon: <FiUser size={20} />,
        },
      ],
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
      path: null,
      icon: <MailIcon size={20} />,
      subMenus: [
        {
          name: menuList.SCROLLING,
          path: routes.SCROLLING,
          icon: <FiShoppingCart size={20} />,
        },
        {
          name: menuList.SMS,
          path: routes.SMS,
          icon: <IoDocumentTextOutline size={20} />,
        },
        {
          name: menuList.LICENSE,
          path: routes.LICENSE,
          icon: <IoDocumentTextOutline size={20} />,
        },
      ],
    },
    {
      name: menuList.OTHERS,
      path: null,
      icon: <FiShoppingCart size={20} />,
      subMenus: [
        {
      name: menuList.BILLING,
      path: routes.BILLING,
      icon: <FiShoppingCart size={20} />,
    },
    {
      name: menuList.RELEASES,
      path: routes.RELEASES,
      icon: <IoDocumentTextOutline size={20} />,
    },
      ],
    },
  ];
  

  return (
    <header
      className="shadow-md fixed w-full top-0 z-50"
      onMouseEnter={() => setActiveDropdown(null)}
    >
      <nav className="bg-white flex items-center justify-between" onMouseEnter={() => setActiveDropdown(null)}>
        <div className="w-40 mt-3 mx-6">
          <span>
            <img src={logo3} alt="flowina" />
          </span>
          <p className="font-bold relative bottom-2 text-right">Version 4.0A</p>
        </div>
        <div className="flex">
          {menus.map((menu, i) => (
            <div
              key={i}
              className="relative"
              onMouseLeave={() => {
                if (!menu.subMenus) {
                  setActiveDropdown(null);
                }
              }}
            >
              {menu.subMenus ? (
                <div
                  className={`flex group cursor-pointer text-sm gap-2.5 font-medium mx-1 py-2 p-3 hover:bg-[#e6e1f9] bg-customBackground text-customText bg-opacity-20 rounded-full ${
                    activeDropdown === menu.name ? "bg-[#7a5cf1]" : ""
                  }`}
                  onMouseEnter={() => setActiveDropdown(menu.name)}
                >
                  <h2>{menu.icon}</h2>
                  <h2>{menu.name}</h2>
                </div>
              ) : (
                <NavLink
                  to={menu?.path}
              className={`flex text-sm gap-2.5 font-medium mx-1 py-2 p-3 hover:bg-[#e6e1f9] bg-customBackground text-customText bg-opacity-20 rounded-full ${
                isActive(menu.path) ? "bg-[#7a5cf1]  " : ""
              }`}
                  onMouseEnter={() => setActiveDropdown(null)}
            >
              <h2>{menu?.icon}</h2>
              <h2>{menu?.name}</h2>
            </NavLink>
              )}
              {activeDropdown === menu.name && (
                <div
                  className="absolute top-full mt-1 bg-gray-100 shadow-md rounded-md divide-y divide-gray-200"
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                  }}
                >
                  {menu.subMenus.map((subMenu, j) => (
                    <NavLink
                      key={j}
                      to={subMenu.path}
                      className="flex font-medium justify-start p-2 py-2 w-32 gap-2 hover:bg-[#e6e1f9] rounded-md"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {subMenu.icon}
                      {subMenu.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <Button
            className="border-2 border-black font-semibold px-8 mr-4"
            title={"Logout"}
            primary
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
