import React, {useState, useEffect} from 'react';

import { findOrCreateUser, fetchMoviesData } from './api/serverApi'
import MovieList from './MovieList/MovieList'
import TopNav from './TopNav/TopNav'
import './App.css';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})
  const [movies, setMovies] = useState([])

  const handleLogin = async (response) => {
    const userData = await findOrCreateUser(response.profileObj.email)
    setUser({
      ...userData,
      ...response.profileObj,
      ...response.tokenObj,      
    })
  }

  const markMoviesWatched = () => {
    const newMovies = movies.map(m => {
      const id = m._id;
      let hasSeen = ''
      if (user.moviesWatched[id]) {
        hasSeen = 'X'
      }
      m[user.givenName] = hasSeen;  
      return m 
    })  
    setMovies(newMovies)
  }

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchMoviesData(user)
      setMovies(movies)
    }
    fetchData()    
  }, [])  

  useEffect(() => {
    markMoviesWatched()
  }, [user])

  return(
    <div className='App'>
      <TopNav 
        appName="Red Carpet Challenge" 
        isAuthenticated={isAuthenticated}
        user={user}
        handleLogin={handleLogin}
      />
      <MovieList user={user} movies={movies}/>
    </div>
    )
}

export default App;
