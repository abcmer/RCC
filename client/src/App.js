import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import config from './config';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

const App = () => {
  const [movies, setMovies] = useState([])
  const [columnDefs] = useState([
    { headerName: "Film Title", field: "title", sortable: true, filter: true, checkboxSelection: true },
    { headerName: "Award Show Year", field: "awardShowYear", sortable: true, filter: 'agNumberColumnFilter' },
  ])
  const fetchMoviesData = async () => {
    const response = await axios.get(`${config.apiUrl}/api/movies`)
    setMovies(response.data)
  }

  useEffect(() => {
    fetchMoviesData()
  }, [])

  return(
    <div className="ag-theme-alpine-dark" style={ {height: window.innerHeight, width: window.innerWidth} }>
      <AgGridReact
        columnDefs={columnDefs}
        rowSelection='multiple'
        rowData={movies}>
      </AgGridReact>
    </div>
    )
}

export default App;
