const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Print = sequelize.define("print", {
    orderId: {
      type: Sequelize.STRING,
    },
    img_front: {
      type: Sequelize.STRING,
    },
    img_back: {
        type: Sequelize.STRING
    },
  },
  {
    initialAutoIncrement: 10000,
  });
  return Print;
};
