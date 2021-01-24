var pgp = require('pg-promise')(/* options */)
var db = pgp(process.env.DB)

module.exports = db
