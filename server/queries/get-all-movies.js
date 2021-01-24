var pgp = require('pg-promise')(/* options */)
const db = require('../database/create-database')
const humps = require('humps')

const getAllMovies = async (userId) => {
  if (!userId) {
    userId = null
  }
  const query = `
    select 
      m.tmdb_id,
      m.title,
      m.award_show_index,
      m.award_show_year,
      case 
        when um.created_at is not null 
        then true
        else false
      end as checked
    from movies m
    left join (
      select *
      from user_movies
      where user_id = $1
      ) um
    on m.tmdb_id = um.tmdb_id;
    `
  try {
    const [data] = await db.multi(query, userId);
    return humps.camelizeKeys(data)
  } catch (error) {
    console.log(error)
  }
}

module.exports = getAllMovies