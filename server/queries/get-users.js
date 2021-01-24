var pgp = require('pg-promise')(/* options */)
const db = require('../database/create-database')
const humps = require('humps')

const getUsers = async (userId) => {
  if (!userId) {
    userId = null
  }
  const query = `
    select * 
    from users
    where id=$1;
  `
    console.log('query', query)
  try {
    const [data] = await db.multi(query, userId);
    return humps.camelizeKeys(data)
  } catch (error) {
    console.log(error)
  }
}

module.exports = getUsers