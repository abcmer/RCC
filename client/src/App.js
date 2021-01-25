import React, {useState, useEffect} from 'react';
import { findOrCreateUser, fetchMoviesData } from './api/serverApi'
import MovieList from './MovieList/MovieList'
import TopNav from './TopNav/TopNav'
import './App.css';

const App = (props) => {
  const {userData} = props;
  const [user, setUser] = useState(userData || {})
  const [moviesWatched, setMoviesWatched] = useState([])
  const [movies, setMovies] = useState([])

  const handleLogin = async (response) => {
    const userData = await findOrCreateUser(response.profileObj.email)
    const data = {
      ...userData,
      ...response.profileObj,
      ...response.tokenObj,      
    }
    setUser(data)
    window.localStorage.setItem(user, JSON.stringify(data))
  }

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchMoviesData(user.id || null)
      setMoviesWatched(movies.filter(m => m.checked === true).map(m => m.tmdbId))
      setMovies(movies)
    }
    fetchData()    
  }, [user])  

  return(
    <div className='App'>
      <TopNav 
        appName="Red Carpet Challenge" 
        isAuthenticated={Boolean(user)}
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
