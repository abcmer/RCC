var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:password@localhost:5432/test2')

const test = async () => {
  try {
    const [data] = await db.multi('SELECT * FROM table1');
  } catch (error) {
    console.log(error)
  }
}
test()