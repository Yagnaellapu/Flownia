import React, { useState, useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from "prop-types";

Selector.propTypes = {
  label: PropTypes.string.isRequired,
  selectorList: PropTypes.array.isRequired,
};

function Selector({ label, selectorList }) {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const selectorRef = useRef(null);
  const ulRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  const handleInputClick = () => {
    setOpen(!open);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleListItemClick = (siteName) => {
    if (siteName.toLowerCase() !== selected.toLowerCase()) {
      setSelected(siteName);
      setOpen(false);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (open && inputRef.current) {
      const inputWidth = inputRef.current.offsetWidth;
      ulRef.current.style.width = `${inputWidth}px`;
    }
  }, [open]);

  return (
    <div ref={selectorRef}>
      <label htmlFor={label} className="block mb-2 font-medium">
        {label}
      </label>
      <div
        ref={inputRef}
        onClick={handleInputClick}
        className={`w-full px-3 py-2 border rounded-lg flex items-center justify-between focus:outline-none ${
          !selected && "text-gray-400"
        } ${
          open
            ? " border-2 border-violet-400 focus:border-violet-400"
            : " border-2 border-gray-200"
        }
  focus:ring focus:ring-violet-400 focus:ring-offset-2`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "--Select--"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      {open ? (
        <ul
          ref={ulRef}
          className={`border-2 bg-white mt-2 rounded-md overflow-y-auto z-10 ${
            open ? "absolute" : "hidden"
          }
          ${
            open
              ? " border-2 border-violet-400 focus:border-violet-400"
              : " border-2 border-gray-200"
          }
          `}
        >
          <div className="flex items-center px-2 top-0 bg-white">
            <AiOutlineSearch size={18} className="text-gray-700" />
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter site name"
              className="placeholder:text-gray-300 p-2 outline-none"
            />
          </div>

          {selectorList.map((site) => (
            <li
              key={site?.name}
              className={`p-2 my-1 text-base hover:bg-[#eae7f5] rounded-md 
            ${
              site?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-[#e6e1f9]"
            }
            ${
              site?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
              onClick={() => handleListItemClick(site.name)}
            >
              {site?.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Selector;
