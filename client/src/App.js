import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import config from './config';

const App = () => {
  const [joints, setJoints] = useState([])
  const fetchJointsData = async () => {
    const response = await axios.get(`${config.apiUrl}/api/joints`)
    setJoints(response.data)
  }

  useEffect(() => {
    fetchJointsData()
  }, [])

  return(
    <div>
      {joints.map(j => <h1 key={j._id}>{j.name}</h1>)}
    </div>
  )
}

export default App;
