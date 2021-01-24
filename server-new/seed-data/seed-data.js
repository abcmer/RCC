var pgp = require('pg-promise')(/* options */)
const db = require('../database/create-database')
const movieSeedData = require('./movies.json')

const createTables = () => {
  const createTableStatements = [
    `
    CREATE TABLE if not EXISTS movies (
      tmdb_id int PRIMARY KEY,
      title VARCHAR ( 255 ) NOT NULL,
      award_show_index INT NOT NULL,
      award_show_year INT NOT NULL
    );
    `,
    `
    create table if not exists users (
      id SERIAL PRIMARY KEY,
      email VARCHAR (255),
      created_at TIMESTAMP NOT NULL
    );
    `,
    `
    create table if not exists user_movies (
      id SERIAL PRIMARY KEY,
      user_id INT,
      tmdb_id int,
      created_at TIMESTAMP,
      CONSTRAINT fk_user
          FOREIGN KEY(user_id) 
          REFERENCES users(id),
        CONSTRAINT fk_movie
          FOREIGN KEY(tmdb_id) 
          REFERENCES movies(tmdb_id)
    );
    `
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
      console.log('data', data)
        // data = array of null-s
    })
    .catch(error => {
      console.log('error', error)
        // ERROR
    });
}

const seedDatabase = () => {
  createTables()
  insertMovieData()
}

module.exports = {seedDatabase}



