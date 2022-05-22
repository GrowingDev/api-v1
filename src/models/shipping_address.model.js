const { sequelize } = require(".");


module.exports = (sequelize, Sequelize) => {
  const ShippingAddress = sequelize.define(
    "shipping_address",
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
      phone_primary: {
        type: Sequelize.STRING,
      },
      phone_secondary: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
    },
    {
      initialAutoIncrement: 10000,
    }
  );

  return ShippingAddress;
};
