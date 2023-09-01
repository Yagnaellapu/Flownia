import React, { useState } from "react";
import { Button, Selector, TextField } from "../../components";
import {
  Table,
  Search,
  EditDeleteButtons,
  ScrollToTop,
} from "../../components";
import { createColumnHelper } from "@tanstack/react-table";


function ScrollingMessage() {
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

  const isEditActive = selectedRows.length === 1;
  const isDeleteActive = selectedRows.length > 0;

  return (
    <div className="flex-grow px-4">
      <div className="py-8 gap-4 mb-4 ">
        <div className="w-full mx-auto px-2">
          <form className="grid grid-cols-1 gap-6 ">
            <div className=" w-full mx-auto max-w-xl">
              <Selector
                label={
                  <span>
                    Select Facility<sup>*</sup>
                  </span>
                }
                selectorList={sitename}
                defaultSelectName="--Select"
              />
            </div>

            <div className=" grid grid-cols-2 gap-6 w-full mx-auto max-w-4xl ">
              <div className="col-span-1 flex flex-col">
                <TextField
                  type={"text"}
                  label={"From"}
                  placeholder={"Select Start Date"}
                  value={""}
                  onChange={() => {}}
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <TextField
                  type={"text"}
                  label={"To"}
                  placeholder={"Select End Date"}
                  value={""}
                  onChange={() => {}}
                />
              </div>
              <div className="col-span-2 flex flex-col">
                <label className=" font-semibold mb-2">Scrolling Message</label>
                <textarea
                  className="border-2  border-violet-400 rounded-lg p-2 outline-none"
                  placeholder="Enter Scrolling Message"
                  rows="4"
                />
              </div>
            </div>
            <Button className="w-full mx-auto max-w-xl mt-4" title={"submit"} />
          </form>
        </div>
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
}

export default ScrollingMessage;
