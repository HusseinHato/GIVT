import { AgGridReact } from "ag-grid-react";
import React from "react";
import { useMemo, useRef, useState } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function TableBerita({rowData, onSelectionChanged, gridRef, onRowClicked, selectedRowOnLoad}) {

    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '395px', width: '100%' }), []);
    const [columnDefs, setColumnDefs] = useState([
        {   field: 'judul',
            minWidth: 250,
        },
        { field: 'created_at', minWidth: 150  },
    ]);

    const defaultColDef = useMemo(() => {
        return {
        flex: 1,
        minWidth: 100,
        };

    }, []);

    return (
        <div style={containerStyle}>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={gridStyle} className="ag-theme-alpine">
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    rowSelection={'single'}
                    onSelectionChanged={onSelectionChanged}
                    paginationAutoPageSize={true}
                    pagination={true}
                    onRowClicked={onRowClicked}
                ></AgGridReact>
                </div>
            </div>
        </div>
    );

}
