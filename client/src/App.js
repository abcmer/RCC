import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import config from './config';

const App = () => {
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
    <div>
      {movies.map(m => <h1 key={m._id}>{m.title} - {m.awardShowYear}</h1>)}
    </div>
  )
}

export default App;
