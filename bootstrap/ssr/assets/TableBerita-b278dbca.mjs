import { a as jsx } from "../ssr.mjs";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";
const agGrid = "";
const agThemeAlpine = "";
function TableBerita({ rowData, onSelectionChanged, gridRef, onRowClicked, selectedRowOnLoad }) {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "395px", width: "100%" }), []);
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "judul",
      minWidth: 250
    },
    { field: "created_at", minWidth: 150 }
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { style: containerStyle, children: /* @__PURE__ */ jsx("div", { style: { height: "100%", display: "flex", flexDirection: "column" }, children: /* @__PURE__ */ jsx("div", { style: gridStyle, className: "ag-theme-alpine", children: /* @__PURE__ */ jsx(
    AgGridReact,
    {
      ref: gridRef,
      rowData,
      columnDefs,
      defaultColDef,
      rowSelection: "single",
      onSelectionChanged,
      paginationAutoPageSize: true,
      pagination: true,
      onRowClicked
    }
  ) }) }) });
}
export {
  TableBerita as T
};
