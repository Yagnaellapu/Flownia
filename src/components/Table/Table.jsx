import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import PropTypes from "prop-types";

import { rankItem } from "@tanstack/match-sorter-utils";
import IndeterminateCheckbox from "../CheckBoxes/IndeterminateCheckbox";
import Pagination from "../Pagination/Pagination";

const globalFilterFn = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({
    itemRank,
  });
  return itemRank.passed;
};

Table.propTypes = {
  tableData: PropTypes.array.isRequired,
  enableRowSelection: PropTypes.bool,
  columns: PropTypes.array.isRequired,
  selectedRows: PropTypes.func,
  disableHeaderCheckBox: PropTypes.bool,
  searchInput: PropTypes.string,
  noPagination: PropTypes.bool,
};

Table.defaultProps = {
  enableRowSelection: false,
  disableHeaderCheckBox: false,
  selectedRows: () => {},
  searchInput: "",
  noPagination: false,
};

function Table({
  tableData,
  columns,
  enableRowSelection,
  selectedRows,
  disableHeaderCheckBox,
  searchInput,
  noPagination,
}) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  const columnHelper = createColumnHelper();

  const columnsWithCheckBox = enableRowSelection
    ? [
        columnHelper.accessor("_", {
          header: ({ table }) => {
            return !disableHeaderCheckBox ? (
              <IndeterminateCheckbox
                {...{
                  checked: table.getIsAllRowsSelected(),
                  indeterminate: table.getIsSomeRowsSelected(),
                  onChange: table.getToggleAllRowsSelectedHandler(),
                }}
              />
            ) : null;
          },
          cell: ({ row }) => (
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          ),
        }),
        ...columns,
      ]
    : columns;

  const table = useReactTable({
    data: tableData,
    columns: columnsWithCheckBox,
    state: {
      rowSelection,
      globalFilter,
    },
    filterFns: {
      globalFilterFn,
    },
    enableRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    globalFilterFn,
  });

  React.useEffect(() => {
    if (selectedRows) {
      selectedRows(
        table.getSelectedRowModel().flatRows.map((row) => row.original)
      );
    }
  }, [rowSelection, selectedRows, table]);

  React.useEffect(() => {
    if (searchInput?.trim()) {
      setGlobalFilter(searchInput);
    } else {
      setGlobalFilter("");
    }
  }, [searchInput]);

  return (
    <>
      <div>
        <table className="w-full table-auto">
          <thead>
            {table.getHeaderGroups().map((headerGroup, index) => (
              <tr key={headerGroup.id} className="bg-[#cdc3f1] text-center">
                {headerGroup.headers.map((header, index) => (
                  <th key={header.id} className={`p-3`}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={`border-b-2 hover:bg-[#ebe7f9] bg-opacity-20 text-center`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={`p-3`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!noPagination ? <Pagination table={table} /> : null}
    </>
  );
}

export default Table;
