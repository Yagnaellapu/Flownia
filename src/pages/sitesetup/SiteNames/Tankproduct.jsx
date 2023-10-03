import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { ScrollToTop, Selector, TextField } from "../../../components";
import { menuList } from "../../../constants/menu.constants";
import { Buttons, Table } from "../../../components";
import { EditDeleteButtons, Search } from "../../../components";
import { createColumnHelper } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";


const Tankname = [
  {
    name: "Tank 1",
  },
  {
    name: "Tank 2",
  },
  {
    name: "Tank 3",
  },
  {
    name: "Tank 4",
  },
  {
    name: "Tank 5",
  },
];

const Tankproduct = () => {
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
      <div className="flex items-center h-14 text-primary-color font-bold">
        <div className="flex items-center gap-2">
          <AiOutlineSetting className="w-6 h-6" />
          <h3>{menuList.SITE_SETUP_TANKPRODUCT}</h3>
        </div>
        <div className="flex justify-end flex-1">
          <div
            className="mr-8 cursor-pointer group relative"
            onClick={() => navigate(`/sitesetup/facility`)}
          >
            Facility
            <div className="absolute inset-x-0 h-0.5 bg-violet-400 transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100"></div>
          </div>
          <div
            className="mr-8 cursor-pointer group relative"
            onClick={() => navigate(`/sitesetup/tank`)}
          >
            Tank
            <div className="absolute inset-x-0 h-0.5 bg-violet-400 transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100"></div>
          </div>
          <div
            className="cursor-pointer group relative"
            onClick={() => navigate(`/sitesetup/mid grade`)}
          >
            Midgrade
            <div className="absolute inset-x-0 h-0.5 bg-violet-400 transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100"></div>
          </div>
        </div>
      </div>
      <div className="py-8 mb-4">
          <form className="grid grid-cols-6 gap-3">
            <div className="col-span-1">
              <Selector label={"Tank Name"} selectorList={Tankname} />
            </div>
            <div className="col-span-1">
              <Selector label={"Product Name"} selectorList={Tankname} />
            </div>
            <div className="col-span-1">
              <Selector label={"Octane Rating"} selectorList={Tankname} />
            </div>
            <div className="col-span-1">
              <TextField
                type={"text"}
                label={"Opening Stock(gl)"}
                placeholder={"Opening Stock(gl)"}
                value={""}
                onChange={() => {}}
              />
            </div>
            <div className="col-span-1">
              <TextField
                type={"date"}
                label={"Product Start Date"}
                placeholder={"Product Start Date"}
                value={""}
                onChange={() => {}}
                className="text-gray-400"
              />
            </div>
            <div className="col-span-1">
              <TextField
                type={"date"}
                label={"SIR Start Date"}
                placeholder={"SIR Start Date"}
                value={""}
                onChange={() => {}}
                className="text-gray-400"
              />
            </div>
          </form>
        <Buttons
          btnContainerClassName="mt-16 flex justify-center gap-8 mb-4"
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

export default Tankproduct;
