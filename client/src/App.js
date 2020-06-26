import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import config from './config';
import { Button } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([])
  const [columnDefs, setColumnDefs] = useState([
    { headerName: "Film Title", field: "title" },
    { headerName: "Award Show Year", field: "awardShowYear" },
  ])
  const fetchMoviesData = async () => {
    const response = await axios.get(`${config.apiUrl}/api/movies`)
    console.log(response.data)
    setMovies(response.data)
  }

  useEffect(() => {
    fetchMoviesData()
  }, [])

  return(
    <div className="ag-theme-alpine" style={ {height: window.innerHeight, width: window.innerWidth} }>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={movies}>
      </AgGridReact>
    </div>
    )
}

export default App;
