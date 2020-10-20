import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'

const Table = ({ data }) => {
    const columns = [
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'type', headerName: 'Type', width: 150 },
        { field: 'flight', headerName: 'Flight No.', width: 120 },
        { field: 'airline', headerName: 'Airline', width: 200 },
        { field: 'departing', headerName: 'Departing', width: 180 },
        { field: 'destination', headerName: 'Destination', width: 180 },
        { field: 'rows', headerName: 'Affected Rows', width: 180 }
    ]

    const [rows, setRows] = useState([])

    useEffect(() => {
        const arr = []
        data.map(row => {
            arr.push({
                id: row._id,
                type: row.type.charAt(0).toUpperCase() + row.type.slice(1),
                date: row.date.split('T')[0],
                flight: row.flight,
                airline: row.airline,
                departing: row.departing,
                destination: row.destination,
                rows: row.rows
            })
        })
        setRows(arr)
        //setRows({ id: data[0]._id, airline: 'Air' })
    }, [data])

    return (
        <div style={{ height: '70vh', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                autoPageSize="true"
                hideFooterRowCount="true"
            />
        </div>
    )
}

export default Table
