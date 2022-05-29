module.exports = {
    HOST: "localhost",
    USER: "api",
    PASSWORD: "XoTda@0!",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };