import axios from 'axios';

import config from '../config';

export const fetchMoviesData = async (user) => {
  console.log('FETCHING MOVIE DATA')
  const response = await axios.get(`${config.apiUrl}/api/movies`)
  return response.data
}


export const fetchUserData = async (userId) => {
  const response = await axios.get(`${config.apiUrl}/api/users/?userId=${userId}`)
  return response.data[0]
}
