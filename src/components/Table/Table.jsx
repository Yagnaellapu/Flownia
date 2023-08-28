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
};

Table.defaultProps = {
  enableRowSelection: false,
  disableHeaderCheckBox: false,
  selectedRows: () => {},
  searchInput: "",
};

function Table({
  tableData,
  columns,
  enableRowSelection,
  selectedRows,
  disableHeaderCheckBox,
  searchInput,
}) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  const columnHelper = createColumnHelper();

  const columnsWithCheckBox = enableRowSelection
    ? [
        columnHelper.accessor("_", {
          header: ({ table }) => {
            return !disableHeaderCheckBox ? (
              <div className="px-3">
                <IndeterminateCheckbox
                  {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                  }}
                />
              </div>
            ) : null;
          },
          cell: ({ row }) => (
            <div className="px-1">
              <IndeterminateCheckbox
                {...{
                  checked: row.getIsSelected(),
                  disabled: !row.getCanSelect(),
                  indeterminate: row.getIsSomeSelected(),
                  onChange: row.getToggleSelectedHandler(),
                }}
              />
            </div>
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
      <div className="p-2 rounded">
        <table className="w-full table-auto">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-[#cdc3f1] text-left">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-2 py-3">
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
                className="text-left border-b-2 hover:bg-[#ebe7f9] bg-customBackground text-customText bg-opacity-20 hover:rounded-full"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 hover:rounded-l-lg">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
      <Pagination table={table} />
    </>
  );
}

export default Table;
