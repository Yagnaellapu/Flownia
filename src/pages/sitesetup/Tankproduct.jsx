import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore, MdKeyboardDoubleArrowUp } from "react-icons/md";

const Tankproduct = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [activeRows, setActiveRows] = useState([]);
  const itemsPerPage = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  // Add a scroll event listener to show/hide the button
  window.addEventListener("scroll", handleScroll);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };
  const handleCheckboxToggle = (itemId) => {
    if (activeRows.includes(itemId)) {
      setActiveRows(activeRows.filter((id) => id !== itemId));
    } else {
      setActiveRows([...activeRows, itemId]);
    }
  };

  const data = [
    {
      id: 1,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 2,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 3,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 4,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 5,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 6,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 7,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 8,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 8,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 8,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 8,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
  ];

  return (
    <div className="flex h-10">
      <div className="flex-grow p-3 ">
        <div className="flex items-center gap-2 text-primary-text-color p-2 font-bold">
          <AiOutlineSetting className="w-6 h-6" />

          <h3>Site Setup : Tank Product Setup</h3>
        </div>
        <div className="flex">
          <div className="max-w-7xl mx-auto px-4">
            <div className="py-4 ">
              <form className="grid grid-cols-6 gap-6">
                <div className="col-span-1">
                  <label
                    htmlFor="businessType"
                    className="block mb-2 font-medium"
                  >
                    Tank Name
                  </label>
                </div>
                <div className="col-span-1 mr-2 -translate-x-6">
                  <label htmlFor="brand" className="block mb-2 font-medium">
                    Product Name
                  </label>
                </div>
                <div className="col-span-1 ml-7">
                  <label htmlFor="state" className="block mb-2 font-medium">
                    Octane Rating
                  </label>
                </div>
                <div className="col-span-1">
                  <label htmlFor="Address" className="block mb-2 font-medium">
                    Opening Stock(gl)
                  </label>
                  <input
                    type="text"
                    name="Address"
                    id="Address"
                    className="w-full border-2 rounded-lg py-2 px-3 focus:outline-none focus:border-violet-400 focus:ring-violet-400 block focus:ring-3"
                    placeholder="Opening Stock(gl)"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="state" className="block mb-2 font-medium">
                    Product Start Date
                  </label>
                  <input
                    type="date"
                    name="Address"
                    id="Address"
                    className="w-full border-2 text-gray-400 rounded-lg py-1.5 px-3 focus:outline-none focus:border-violet-400 focus:ring-violet-400 block focus:ring-3"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="Zip Code" className="block mb-2 font-medium">
                    SIR State Date
                  </label>
                  <input
                    type="date"
                    name="Zip Code"
                    id="Zip Code"
                    className="w-full border-2 text-gray-400 rounded-lg py-1.5 px-3 focus:outline-none focus:border-violet-400 focus:ring-violet-400 block focus:ring-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <button className="px-12 py-1 border-2 rounded-md  mr-8  uppercase transition duration-200 hover:text-white hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-700/50 hover:border-transparent active:transform active:rotate-x-15 active:scale-90 ">
            submit
          </button>
          <button className="px-12 py-1 border-2 rounded-md  mr-8  uppercase transition duration-200 hover:text-white hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-700/50 hover:border-transparent active:transform active:rotate-x-15 active:scale-90 ">
            cancel
          </button>
        </div>
        <div className="mt-16 px-4 py-3 h-14 flex items-center">
          <div className="flex gap-3">
            <FaRegEdit
              className={` bg-gray-300 fill-gray-600 rounded-full px-2 w-9 h-8 ${
                activeRows.length > 0 ? "active-icon" : ""
              }`}
              // onClick={() => handleEdit(activeRows[0])}
            />
            <RiDeleteBinLine
              className={`bg-gray-300 fill-gray-600 rounded-full px-2 w-9 h-8  ${
                activeRows.length > 0 ? "active-icon" : ""
              }`}
              // onClick={() => handleDelete(activeRows[0])}
            />
          </div>

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
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setSearchOpen(false);
                    }
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center px-2">
          <table className="w-full table-auto ">
            <thead>
              <tr className="bg-[#b9adeb] text-left">
                <th className="px-8 py-3 rounded-l-lg"> # </th>
                <th className="px-4 py-3"> Start Date </th>
                <th className="px-4 py-3"> Business Type </th>
                <th className="px-4 py-3"> Brand </th>
                <th className="px-4 py-3"> Facility Name </th>
                <th className="px-4 py-3"> Facility Address </th>
                <th className="px-4 py-3"> State </th>
                <th className="px-4 py-3 rounded-r-lg"> Zipcode </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className="text-left border-b-2 hover:bg-[#e6e1f9] bg-customBackground text-customText bg-opacity-20 hover:rounded-lg"
                >
                  <td className="px-2 py-3 inline-flex items-center ">
                    <input
                      type="checkbox"
                      className="mr-2 w-4 h-4"
                      checked={activeRows.includes(item.id)}
                      onChange={() => handleCheckboxToggle(item.id)}
                    />
                    {item.id}
                  </td>

                  <td className="px-4 py-3">{item.startDate}</td>
                  <td className="px-4 py-3">{item.businessType}</td>
                  <td className="px-4 py-3">{item.brand}</td>
                  <td className="px-4 py-3">{item.facilityName}</td>
                  <td className="px-4 py-3">{item.facilityAddress}</td>
                  <td className="px-4 py-3">{item.state}</td>
                  <td className="px-4 py-3">{item.zipcode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center mr-7 mt-6 gap-2 justify-end">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`px-4 py-2 rounded-l-lg focus:outline-none flex items-center ${
              currentPage === 1
                ? " cursor-not-allowed"
                : " hover:bg-violet-700 hover:text-white cursor-pointer"
            }`}
            disabled={currentPage === 1}
          >
            <MdNavigateBefore className="w-6 h-6" />
            Prev
          </button>
          {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(
            (page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page + 1)}
                className={`px-4 py-2  focus:outline-none ${
                  currentPage === page + 1
                    ? " rounded-full bg-violet-500 text-white"
                    : " rounded-full bg-white hover:bg-violet-500 hover:text-white"
                }`}
              >
                {page + 1}
              </button>
            )
          )}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`px-4 py-2 rounded-r-lg  focus:outline-none flex items-center justify-center${
              currentPage === Math.ceil(data.length / itemsPerPage)
                ? "bg-gray-300 cursor-not-allowed"
                : " hover:bg-violet-700 hover:text-white cursor-pointer"
            }`}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          >
            Next
            <MdNavigateNext className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-end items-center">
          {/* Scroll-to-top button */}
          <button
            onClick={scrollToTop}
            className="bottom-10 right-8 bg-violet-300 text-white p-2 rounded-full shadow-lg transition-opacity hover:bg-violet-500"
          >
            <MdKeyboardDoubleArrowUp size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tankproduct;
