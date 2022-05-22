const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Collection = sequelize.define("collection", {
    title: {
      type: Sequelize.STRING,
    },
  },
  {
    initialAutoIncrement: 10000,
  });
  return Collection;
};
