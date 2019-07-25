const dotenv = require("dotenv");
dotenv.config();

const { DB_USER, DB_PASS, DB_NAME, DB_PORT } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres",
    port: DB_PORT,
    seederStorage: "sequelize"
  },
  test: {
    username: DB_USER,
    password: DB_PASS,
    database: "anda_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false,
    port: DB_PORT,
    seederStorage: "sequelize"
  },
  production: {
    username: "root",
    password: null,
    database: DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false,
    seederStorage: "sequelize"
  }
};
