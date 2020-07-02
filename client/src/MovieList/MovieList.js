import React, {useState, useEffect} from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import './MovieList.css';

const MovieList = (props) => {
  const { movies, user } = props;
  let columnDefs;
  if (user.moviesWatched) {
    columnDefs = [
      { headerName: "Film Title", field: "title", sortable: true, filter: true, checkboxSelection: true },
      { headerName: "Award Show Year", field: "awardShowYear", sortable: true, filter: 'agNumberColumnFilter' },
      { headerName: user.givenName, field: user.givenName, sortable: true, filter: true}
    ]
  } else {
    columnDefs = [
      { headerName: "Film Title", field: "title", sortable: true, filter: true, checkboxSelection: true },
      { headerName: "Award Show Year", field: "awardShowYear", sortable: true, filter: 'agNumberColumnFilter' },
    ]
  }

  useEffect(() => {
    
  })
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

export default MovieList;
