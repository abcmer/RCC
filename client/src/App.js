import React from 'react';

import MovieList from './MovieList/MovieList'
import TopNav from './TopNav/TopNav'
import './App.css';

const App = () => {
  return(
    <div className='App'>
      <TopNav appName="Red Carpet Quest"/>
      <MovieList/>
    </div>
    )
}

export default App;
