const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Contact = sequelize.define(
    "contact",
    {
      gender: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      pre_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      phone_01: {
        type: Sequelize.STRING,
      },
      phone_02: {
        type: Sequelize.STRING,
      },
      mail: {
        type: Sequelize.STRING,
      },
    },
    {
      initialAutoIncrement: 10000,
    }
  );

  return Contact;
};
