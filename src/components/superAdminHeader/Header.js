import React from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

function Header({ toggleSidebar }) {
  return (
    <header className="bg-[white] shadow h-14 flex items-center justify-start px-4 sticky top-0 z-50">
      <HiOutlineSquares2X2
        className="w-6 h-6 cursor-pointer"
        onClick={toggleSidebar}
      />
    </header>
  );
}

export default Header;
