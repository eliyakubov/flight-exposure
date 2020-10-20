import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Table from './components/Table'
import { TextField, Select, MenuItem } from '@material-ui/core'
import './App.css'

function App() {
    const [data, setData] = useState([])
    const [airline, setAirline] = useState('')

    useEffect(() => {
        async function fetchFlights() {
            const result = await axios('http://127.0.0.1:5000/getAllFlights')
            setData(result.data)
            //console.log(result.data)
        }
        fetchFlights()
    }, [])

    const handleSelect = e => {
        setAirline(e.target.value)
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Flight Exposure Checker - Canada</h1>
                <p>Have you been exposed to COVID-19 on a recent flight?</p>
                <form className="form-inline">
                    <TextField
                        type="date"
                        label="Date"
                        defaultValue="2020-10-04"
                    />
                    <Select
                        label="Filter by Airline"
                        value={airline}
                        onChange={handleSelect}
                    >
                        <MenuItem value="Air Canada">Air Canada</MenuItem>
                    </Select>
                    <TextField />
                </form>
            </div>
            <div className="main">
                <Table data={data} />
            </div>
            <div className="footer">
                <p>Github</p>
            </div>
        </div>
    )
}

export default App
