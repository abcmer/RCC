import axios from 'axios';

import config from '../config';

export const fetchMoviesData = async (user) => {
  console.log('FETCHING MOVIE DATA')
  const response = await axios.get(`${config.apiUrl}/api/movies`)
  return response.data
}


export const findOrCreateUser = async (userId) => {
  let response
  response = await axios.get(`${config.apiUrl}/api/users/?userId=${userId}`)

  if (response.data.length > 0) {
    return response.data[0]
  } else {
    const data = {
      "userId": `${userId}`,
      "moviesWatched": {} 
    }
    response = await axios.post(`${config.apiUrl}/api/users`, data)
    return response.data
  }
  
}
