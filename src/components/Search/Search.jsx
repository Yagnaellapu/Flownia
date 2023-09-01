import React, { useState, useEffect, useRef } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import PropTypes from "prop-types";
import ToolTip from "../ToolTip/ToolTip";
import { AiOutlineSearch } from "react-icons/ai";

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

function Search({ searchValue, setSearchValue, handleSearchChange }) {
  const [searchOpen, setSearchOpen] = useState(false);

  const searchRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        searchOpen &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
      }
    };
    if (searchOpen) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) {
      setSearchValue("");
    }
  }, [searchOpen, setSearchValue]);

  return (
    <div ref={searchRef} className=" flex ml-auto left-3/4 gap-3">
      <div className="group" id="Search">
        {!searchOpen && (
          <HiOutlineSearch
            className="px-2 w-9 h-8 hover:text-blue-400 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setSearchOpen(true);
            }}
          />
        )}
        <ToolTip label="Search" position="top" />
      </div>
      {searchOpen && (
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="px-6 py-2 border-2 rounded-lg border-violet-400 outline-none block w-full focus:ring-3"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <AiOutlineSearch
            size={18}
            className="text-gray-700 absolute  left-1 top-1/2 transform -translate-y-1/2"
          />
        </div>
      )}
    </div>
  );
}

export default Search;
