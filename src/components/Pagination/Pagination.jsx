import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

Pagination.propTypes = {
  table: PropTypes.object.isRequired,
};

function Pagination({ table }) {
  useEffect(() => {
    table.setPageSize(9);
  }, []);
  const currentPage = table.options.state.pagination.pageIndex;
  console.log(table);
  return (
    <div className="flex items-center mr-7 mt-6 gap-2 justify-end">
      <button
        className={`px-4 py-2 rounded-l-lg focus:outline-none flex items-center ${
          table.getCanPreviousPage()
            ? " hover:bg-violet-700 hover:text-white cursor-pointer"
            : " cursor-not-allowed"
        }`}
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <MdNavigateBefore className="w-6 h-6" />
        Prev
      </button>
      {[...Array(table.getPageCount()).keys()].map((page) => (
        <button
          key={page}
          onClick={() => table.setPageIndex(Number(page))}
          className={`px-4 py-2  focus:outline-none ${
            currentPage === page
              ? " rounded-full bg-violet-500 text-white"
              : " rounded-full bg-white hover:bg-violet-500 hover:text-white"
          }`}
        >
          {page + 1}
        </button>
      ))}
      <button
        className={`px-4 py-2 rounded-r-lg  focus:outline-none flex items-center justify-center${
          table.getCanNextPage()
            ? " hover:bg-violet-700 hover:text-white cursor-pointer"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
        <MdNavigateNext className="w-6 h-6" />
      </button>
    </div>
  );
}

export default Pagination;
