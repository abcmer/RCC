var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:password@localhost:5432/rcc')

module.exports = db
