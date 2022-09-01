const { Sequelize, DataTypes } = require("sequelize"); // --> importar desde sequelize, inslatar (npm i sequelize pg pg-hstore)

const db = new Sequelize({
  //--> Establecer la conexión entre Node y Postgres usando sequelize
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "cUCUTA@12345",
  port: 5432,
  database: "HelloWorld",
});

module.exports = { db, DataTypes };
