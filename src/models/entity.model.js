const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Entity = sequelize.define(
    "entity",
    {
      group: {
        type: Sequelize.STRING,
      },
      taxId: {
        type: Sequelize.STRING,
      },
      uId: {
        type: Sequelize.STRING,
      },
      eori: {
        type: Sequelize.STRING,
      },
      homepage: {
        type: Sequelize.STRING,
      },
      tax: {
        type: Sequelize.STRING,
      },
      total: {
        type: Sequelize.STRING,
      },
    },
    {
      initialAutoIncrement: 10000,
    }
  );

  return Entity;
};
