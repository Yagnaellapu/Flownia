import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaUserTie } from "react-icons/fa";
import {
  Selector,
  Table,
  Search,
  EditDeleteButtons,
  TextField,
  ScrollToTop,
  Button,
} from "../../components";
import Buttons from "../../components/Buttons/Buttons";
import { createColumnHelper } from "@tanstack/react-table";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";
import { menuList } from "../../constants/menu.constants";

const Zlinks = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [selectedRows, setSelectedRows] = useState([]);

  const headerData = [
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
      startDate: "1996-03-15",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 3,
      startDate: "2023-09-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 4,
      startDate: "2003-02-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 5,
      startDate: "2020-10-16",
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
      id: 9,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 10,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 11,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 12,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 13,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 14,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 15,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 16,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 17,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 18,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 19,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 20,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 21,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 22,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 23,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 24,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 25,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 26,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 27,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 28,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 29,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 30,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 31,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 32,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 33,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 34,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 35,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
    {
      id: 36,
      startDate: "2023-08-16",
      businessType: "Retail",
      brand: "ABC",
      facilityName: "Store 1",
      facilityAddress: "123 Main St",
      state: "CA",
      zipcode: "12345",
    },
  ];

  const sitename = [
    {
      name: "facility",
    },
    {
      name: "Tank",
    },
    {
      name: "Tank Product",
    },
    {
      name: "Midgrage",
    },
    {
      name: "TBD",
    },
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
    }),
    columnHelper.accessor("startDate", {
      header: "Start Date",
    }),
    columnHelper.accessor("businessType", {
      header: "Business Type",
    }),
    columnHelper.accessor("brand", {
      header: "Brand",
    }),
    columnHelper.accessor("facilityName", {
      header: "Facility Name",
    }),
    columnHelper.accessor("facilityAddress", {
      header: "Facility Address",
    }),
    columnHelper.accessor("state", {
      header: "State",
    }),
    columnHelper.accessor("zipcode", {
      header: "Zip Code",
    }),
  ];

  const [userInfo, setUserInfo] = useState({
    name: "",
    Email: "",
    phoneNumber: "",
  });

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");

    if (numericValue.length <= 10) {
      setInputValue(formatPhoneNumber(numericValue));
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleFormSubmit = () => {
    if (error) {
      console.error("Validation error: Only numbers are allowed");
      return;
    }

    // Update the user information state
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      phoneNumber: inputValue,
    }));

    // Clear the input field
    setInputValue("");
  };

  // const personData = {
  //   name: "John Doe",
  //   email: "johndoe@example.com",
  //   phoneNumber: "123-456-7890",
  // };

  const buttons = [
    {
      title: "Submit",
      onClick: handleFormSubmit,
      type: "primary",
    },
    {
      title: "Cancel",
      onClick: () => {},
      type: "secondary",
    },
  ];

  const isEditActive = selectedRows.length === 1;
  const isDeleteActive = selectedRows.length > 0;

  return (
    <div className="flex-grow px-4">
      <div className="flex items-center gap-2 h-14 text-primary-color font-bold">
        <TfiMenuAlt className="w-6 h-6" />
        <h3>{menuList.Z_LINKS}</h3>
      </div>
      <div className="py-8 gap-4 mb-4">
        <div className="w-full mx-auto px-2">
          <form className="col-span-3 grid grid-cols-3 gap-8">
            <div className="col-span-1 flex flex-col">
              <Selector label="Site Name" selectorList={sitename} />
            </div>
            <div className="col-span-1 flex flex-col">
              <TextField
                type="number"
                label="User Contact #"
                placeholder="User Contact #"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-span-1 flex flex-col">
              <FaUserTie className=" text-indigo-400 w-14 h-12 absolute top- right-72 transform translate-x-1/4 -translate-y-12" />
              <div className="mt-1">
                <p className="mb-2">Name: {userInfo.name}</p>
                <p className="mb-2">Email: {userInfo.Email}</p>
                <p className="mb-2">Phone: {userInfo.phoneNumber}</p>
              </div>
            </div>
          </form>
        </div>
        <Buttons
          btnContainerClassName="flex justify-center gap-10 mt-10 "
          buttons={buttons}
        /> 
      </div>
      <div className="px-4 py-3 h-14 flex items-center">
        <EditDeleteButtons
          isEditActive={isEditActive}
          isDeleteActive={isDeleteActive}
        />
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearchChange={handleSearchChange}
        />
      </div>
      <Table
        tableData={headerData}
        columns={columns}
        enableRowSelection={true}
        selectedRows={setSelectedRows}
        searchInput={searchValue}
      />
      <ScrollToTop />
    </div>
  );
};

export default Zlinks;
