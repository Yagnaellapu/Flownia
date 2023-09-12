import React, { useState } from "react";
import { FcManager } from "react-icons/fc";
import { menuList } from "../../../constants/menu.constants";
import { ScrollToTop, Selector, TextField } from "../../../components";
import { Buttons, Table } from "../../../components";
import { EditDeleteButtons, Search } from "../../../components";
import { createColumnHelper } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";


const userlocation = [
  {
    name: "USA",
  },
  {
    name: "India",
  },
  
];

function Manager () {
 const [searchValue, setSearchValue] = useState("");
 const [selectedRows, setSelectedRows] = useState([]);

 const handleSearchChange = (event) => {
   setSearchValue(event.target.value);
 };

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

 const buttons = [
   {
     title: "Submit",
     onClick: () => {},
     type: "primary",
   },
   {
     title: "Cancel",
     onClick: () => {},
     type: "secondary",
   },
 ];

 const navigate = useNavigate();

 const isEditActive = selectedRows.length === 1;
 const isDeleteActive = selectedRows.length > 0;

  return (
    <div className="flex-grow mx-6">
      <div className="flex items-center text-primary-color h-14 font-bold">
        <div className="flex items-center gap-2">
          <FcManager className="w-6 h-6" />
          <h3>{menuList.USER_SETUP_MANAGER}</h3>
        </div>
        <div className="flex justify-end flex-1">
          <p
            className="mr-8 cursor-pointer group relative"
            onClick={() => navigate(`/usersetup/corporate user`)}
          >
            Corporate User
            <div className="absolute inset-x-0 h-0.5 bg-violet-400 transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100"></div>
          </p>
          <p
            className="mr-8 cursor-pointer group relative"
            onClick={() => navigate(`/usersetup/owner`)}
          >
            Owner
            <div className="absolute inset-x-0 h-0.5 bg-violet-400 transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100"></div>
          </p>

          <p
            className="mr-8 cursor-pointer group relative"
            onClick={() => navigate(`/usersetup/app user`)}
          >
            App User
            <div className="absolute inset-x-0 h-0.5 bg-violet-400 transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100"></div>
          </p>
          <p
            className="cursor-pointer group relative"
            onClick={() => navigate(`/usersetup/accountant`)}
          >
            Accountant
            <div className="absolute inset-x-0 h-0.5 bg-violet-400 transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100"></div>
          </p>
        </div>
      </div>
      <div className="py-8 mb-4">
          <form className="grid grid-cols-4 gap-3">
            <div className="col-span-1">
              <TextField
                type={"text"}
                label={"User Name"}
                placeholder={"User Name"}
                value={""}
                onChange={() => {}}
              />
            </div>
            <div className="col-span-1">
              <Selector label={"User Location"} selectorList={userlocation} />
            </div>
            <div className="col-span-1">
              <TextField
                type={"text"}
                label={"Contact"}
                placeholder={"Contact"}
                value={""}
                onChange={() => {}}
              />
            </div>
            <div className="col-span-1">
              <TextField
                type={"text"}
                label={"User Email"}
                placeholder={"User Email"}
                value={""}
                onChange={() => {}}
              />
            </div>
          </form>
        

        <Buttons
          btnContainerClassName="flex justify-center gap-8 mt-16 mb-4"
          buttons={buttons}
        />
      </div>
      <div className=" px-4 py-3 h-14 flex items-center">
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
        disableHeaderCheckBox
      />
      <ScrollToTop />
    </div>
  );
};

export default Manager;
