import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import config from './config';

const App = () => {
  const [movies, setMovies] = useState([])
  const fetchMoviesData = async () => {
    const response = await axios.get(`${config.apiUrl}/api/movies`)
    setMovies(response.data)
  }

  useEffect(() => {
    fetchMoviesData()
  }, [])

  return(
    <div>
      {movies.map(j => <h1 key={j._id}>{j.name}</h1>)}
    </div>
  )
}

export default App;
