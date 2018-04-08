var Sequelize = require('sequelize');
var sequelize = new Sequelize('bawurradb',null, null, {
  host: 'localhost',
  dialect: 'sqlite',
  operatorsAliases: false,
  // SQLite only
  storage: './bawurradb.sqlite'
});
module.exports = sequelize;
