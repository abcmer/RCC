import React, {useState, useEffect} from 'react';

import { findOrCreateUser, fetchMoviesData, updateUserData } from './api/serverApi'
import MovieList from './MovieList/MovieList'
import TopNav from './TopNav/TopNav'
import './App.css';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})
  const [moviesWatched, setMoviesWatched] = useState([])
  const [movies, setMovies] = useState([])

  const handleLogin = async (response) => {
    const userData = await findOrCreateUser(response.profileObj.email)
    setUser({
      ...userData,
      ...response.profileObj,
      ...response.tokenObj,      
    })
  }

  const getMoviesWatched = async (user) => {
    if (!user) {
      return []
    }
    if (user.moviesWatched) {
      return user.moviesWatched.map(m => m.tmdbId)
    } else {
      return []
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      console.log(user)
      const movies = await fetchMoviesData(user.id || null)
      console.log('movies', movies)
      setMoviesWatched(movies.filter(m => m.checked == true).map(m => m.tmdbId))
      console.log(movies.filter(m => m.checked == true).map(m => m.tmdbId))
      setMovies(movies)
    }
    fetchData()    
  }, [user])  

  return(
    <div className='App'>
      <TopNav 
        appName="Red Carpet Challenge" 
        isAuthenticated={isAuthenticated}
        user={user}
        handleLogin={handleLogin}
      />
      <MovieList 
        user={user} 
        movies={movies} 
        moviesWatched={moviesWatched}
        setMoviesWatched={setMoviesWatched}
        />
    </div>
    )
}

export default App;
