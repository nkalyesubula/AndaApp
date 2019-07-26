const dotenv = require("dotenv");
dotenv.config();

const { DB_USER, DB_PASS, DB_NAME } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: DB_USER,
    password:"postgres",
    database: "andatest",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false,
    port: 5432
  },
  production: {
    username: "root",
    password: null,
    database: DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  }
};
