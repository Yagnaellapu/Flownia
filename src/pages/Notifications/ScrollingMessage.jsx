import React, { useEffect, useState } from "react";
import { Button, Selector, TextField } from "../../components";
import {
  Table,
  Search,
  EditDeleteButtons,
  ScrollToTop,
} from "../../components";
import { createColumnHelper } from "@tanstack/react-table";
import { useNotifications } from "../../stores";
import { useOverlay } from "../../stores";
import { menuList } from "../../constants/menu.constants";
import { FiMail as MailIcon } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


function ScrollingMessage() {
  const [searchValue, setSearchValue] = useState("");

  const [selectedRows, setSelectedRows] = useState([]);

  const showEditModal = useOverlay((state) => state.showEditModal);
  const showDeleteModal = useOverlay((state) => state.showDeleteModal);

  const {
    isLoading,
    notifications,
    errorMsg,
    getNotifications,
    selectNotifications,
  } = useNotifications((state) => state);

  useEffect(() => {
    getNotifications();
  }, [getNotifications]);

  useEffect(() => {
    selectNotifications(selectedRows);
  }, [selectedRows, selectNotifications]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  // const headerData = [
  //   {
  //     id: 1,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 2,
  //     startDate: "1996-03-15",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 3,
  //     startDate: "2023-09-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 4,
  //     startDate: "2003-02-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 5,
  //     startDate: "2020-10-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 6,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 7,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 8,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 9,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 10,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 11,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 12,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 13,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 14,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 15,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 16,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 17,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 18,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 19,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 20,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 21,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 22,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 23,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 24,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 25,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 26,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 27,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 28,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 29,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 30,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 31,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 32,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 33,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 34,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 35,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  //   {
  //     id: 36,
  //     startDate: "2023-08-16",
  //     businessType: "Retail",
  //     brand: "ABC",
  //     facilityName: "Store 1",
  //     facilityAddress: "123 Main St",
  //     state: "CA",
  //     zipcode: "12345",
  //   },
  // ];

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

  // const columns = [
  //   columnHelper.accessor("id", {
  //     header: "ID",
  //   }),
  //   columnHelper.accessor("startDate", {
  //     header: "Start Date",
  //   }),
  //   columnHelper.accessor("businessType", {
  //     header: "Business Type",
  //   }),
  //   columnHelper.accessor("brand", {
  //     header: "Brand",
  //   }),
  //   columnHelper.accessor("facilityName", {
  //     header: "Facility Name",
  //   }),
  //   columnHelper.accessor("facilityAddress", {
  //     header: "Facility Address",
  //   }),
  //   columnHelper.accessor("state", {
  //     header: "State",
  //   }),
  //   columnHelper.accessor("zipcode", {
  //     header: "Zip Code",
  //   }),
  // ];

  const columns = [
    columnHelper.accessor("id", {
      header: "Id",
    }),
    columnHelper.accessor("name", {
      header: "Name",
    }),
    columnHelper.accessor("username", {
      header: "User Name",
    }),
    columnHelper.accessor("email", {
      header: "Email",
    }),
    columnHelper.accessor("address.city", {
      header: "Address",
    }),
  ];

  const isEditActive = selectedRows.length === 1;
  const isDeleteActive = selectedRows.length > 0;

  const handleEdit = () => {
    showEditModal();
  };
  const handleDelete = () => {
    showDeleteModal();
  };
  const navigate = useNavigate()

  return (
    <div className="flex-grow mx-6">
      <div className="flex items-center text-primary-color h-14 font-bold">
        <div className="flex items-center gap-2">
          <MailIcon className="w-6 h-6" />
          <h3>{menuList.NOTIFICATIONS_SCROLLINGMESSAGE}</h3>
        </div>
        <div className="flex justify-end flex-1">
          <p
            className="mr-8 cursor-pointer group relative"
            onClick={() => navigate(`/notifications/sms`)}
          >
            Sms Notification
            <div className="absolute inset-x-0 h-0.5 bg-violet-400 transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100"></div>
          </p>

          <p className="cursor-pointer group relative">
            License Notification
            <div className="absolute inset-x-0 h-0.5 bg-violet-400 transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100"></div>
          </p>
        </div>
      </div>

      <div className="py-8 mb-4 ">
        <form className="grid grid-cols-1 gap-6 w-full mx-auto max-w-3xl">
          <div className=" grid grid-cols-3 gap-6">
            <div>
              <Selector
                label={
                  <span>
                    Select Facility<sup>*</sup>
                  </span>
                }
                selectorList={sitename}
                defaultSelectName="--Select--"
              />
            </div>
            <div>
              <TextField
                type={"text"}
                label={"From"}
                placeholder={"Select Start Date"}
                value={""}
                onChange={() => {}}
              />
            </div>
            <div>
              <TextField
                type={"text"}
                label={"To"}
                placeholder={"Select End Date"}
                value={""}
                onChange={() => {}}
              />
            </div>
          </div>

          <div>
            <label className="font-semibold">Scrolling Message</label>
            <textarea
              className="border-2 w-full mt-2 border-violet-400 rounded-lg p-2 outline-none"
              placeholder="Enter Scrolling Message"
              rows="4"
            />
          </div>

          <Button
            className="w-full mx-auto max-w-md mt-6"
            title={"submit"}
            primary
          />
        </form>
      </div>

      <div className="px-4 py-3 h-14 flex items-center">
        <EditDeleteButtons
          isEditActive={isEditActive}
          isDeleteActive={isDeleteActive}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearchChange={handleSearchChange}
        />
      </div>
      <Table
        tableData={notifications}
        columns={columns}
        enableRowSelection={true}
        selectedRows={setSelectedRows}
        searchInput={searchValue}
        isLoading={isLoading}
      />
      <ScrollToTop />
    </div>
  );
}

export default ScrollingMessage;
