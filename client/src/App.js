import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import config from './config';
import { Button } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
  const fetchMoviesData = async () => {
    const response = await axios.get(`${config.apiUrl}/api/movies`)
    console.log(response.data)
    setMovies(response.data)
  }

  useEffect(() => {
    fetchMoviesData()
  }, [])

  return(
    <div className={classes.root}>
      <Grid container spacing={3}>  
        {movies.map(m => {
          return(
            <Grid item xs={12}>          
              <Paper className={classes.paper}><h1 key={m._id}>{m.title} - {m.awardShowYear}</h1></Paper>
            </Grid>
          )})}      
      </Grid>          
    </div>
  )
}

export default App;
