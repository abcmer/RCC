var pgp = require('pg-promise')(/* options */)
const db = require('../database/create-database')
const humps = require('humps')


const getAllMovies = async () => {
  try {
    const [data] = await db.multi('SELECT * FROM movies');
    return humps.camelizeKeys(data)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {getAllMovies}