import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

function Search({ searchValue, setSearchValue, handleSearchChange }) {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className=" flex ml-auto left-3/4 gap-3">
      <HiOutlineSearch
        className=" bg-gray-300 rounded-full px-2 w-9 h-8 mt-2 text-blue-800 cursor-pointer"
        onClick={() => {
          setSearchOpen(!searchOpen);
          if (!searchOpen) {
            setSearchValue("");
          }
        }}
      />
      {searchOpen && (
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="px-6 py-2 border-2 rounded focus:outline-none focus:border-violet-400 focus:ring-violet-400 block focus:ring-3"
            value={searchValue}
            onChange={handleSearchChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearchOpen(false);
              }
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Search;
