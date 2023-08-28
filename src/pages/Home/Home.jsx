import React from "react";
import { Cards, Table } from "../../components";
import { createColumnHelper } from "@tanstack/react-table";
import { menuList } from "../../constants/menu.constants";

function Home() {
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
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
    }),
    columnHelper.accessor("startDate", {
      header: "Start Date",
      cell: (value) => {
        const date = new Date(value.getValue());
        return <span> {date.getFullYear()}</span>;
      },
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
  return (
    <div className="flex flex-col">
      <div className="flex-grow p-3 ">
        <div className="flex items-center gap-2 text-primary-text-color p-2 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <h3>{menuList.HOME}</h3>
        </div>
        <Cards />
      </div>

      <Table
        tableData={headerData}
        columns={columns}
        enableRowSelection={true}
        disableHeaderCheckBox
      />
    </div>
  );
}

export default Home;
