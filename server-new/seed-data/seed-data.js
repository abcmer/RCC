var pgp = require('pg-promise')(/* options */)
const db = require('../database/create-database')
const movieSeedData = require('./movies.json')

const createTables = () => {
  const createTableStatements = [
    `
    CREATE TABLE if not EXISTS movies (
      tmdb_id VARCHAR PRIMARY KEY,
      title VARCHAR ( 200 ) NOT NULL,
      award_show_index INT NOT NULL,
      award_show_year INT NOT NULL
    );	
    `,
  ]
  
  createTableStatements.forEach(stmt => {
    db.result(stmt)
      .then(data => {
      })
  })
}

const insertMovieData = () => {
  db.tx(t => {
    const queries = movieSeedData.map(l => {
        return t.none('INSERT INTO movies(tmdb_id, title, award_show_index, award_show_year) VALUES(${tmdbId}, ${title}, ${awardShowIndex}, ${awardShowYear})', l);
    });
    return t.batch(queries);
  })
    .then(data => {
        // SUCCESS
        // data = array of null-s
    })
    .catch(error => {
        // ERROR
    });
}

const seedDatabase = () => {
  createTables()
  insertMovieData()
}

module.exports = {seedDatabase}



