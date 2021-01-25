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
      id VARCHAR (255) PRIMARY KEY,
      created_at TIMESTAMP NOT NULL
    );
    `,
    `
    create table if not exists user_movies (
      id SERIAL PRIMARY KEY,
      user_id VARCHAR(255),
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
        return t.none('UPSERT INTO movies(tmdb_id, title, award_show_index, award_show_year) VALUES(${tmdbId}, ${title}, ${awardShowIndex}, ${awardShowYear}) ON CONFLICT (tmdb_id) DO NOTHING;', l);
    });
    return t.batch(queries);
  })
    .then(data => {
      console.log(`inserted ${data.length} rows into table movies`)
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


