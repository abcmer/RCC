import React, {useState} from 'react';

import MovieList from './MovieList/MovieList'
import TopNav from './TopNav/TopNav'
import './App.css';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})

  const handleLogin = (response) => {
    setUser({
      ...response.profileObj,
      ...response.tokenObj
    })
  }

  return(
    <div className='App'>
      <TopNav 
        appName="Red Carpet Quest" 
        isAuthenticated={isAuthenticated}
        user={user}
        handleLogin={handleLogin}
      />
      <MovieList/>
    </div>
    )
}

export default App;
