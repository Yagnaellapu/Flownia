import React from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { menuList } from "../../constants/menu.constants";
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
import { routes } from "../../constants/routes.constants";
import { IoDocumentTextOutline } from "react-icons/io5";
import Button from "../Buttons/Button";

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};
function Header({ toggleSidebar }) {

  const location = useLocation();

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
    {
      name: menuList.RELEASES,
      path: routes.RELEASES,
      icon: <IoDocumentTextOutline size={20} />,
    },
  ];
  

  return (
    <header className="shadow-md fixed w-full top-0 z-50">
      <nav className="bg-white flex items-center justify-between">
        <div className="w-40 mt-3 mx-6">
          <span>
            <img src={logo3} alt="flowina" />
          </span>
          <p className="font-bold relative bottom-2 text-right">Version4.0A</p>
        </div>
        <div className=" flex">
          {menus?.map((menu, i) => (
            <NavLink
              to={menu?.path}
              key={i}
              className={`flex text-sm gap-2.5 font-medium mx-1 py-2 p-3 hover:bg-[#e6e1f9] bg-customBackground text-customText bg-opacity-20 rounded-full ${
                isActive(menu.path) ? "bg-[#7a5cf1]  " : ""
              }`}
            >
              <h2>{menu?.icon}</h2>

              <h2>{menu?.name}</h2>
            </NavLink>
          ))}
        </div>
        <div>
          <Button
            className=" border-none font-semibold px-8 mr-4 "
            title={"Login"}
            primary
          />
        </div>
      </nav>
    </header>
  );}

export default Header;
