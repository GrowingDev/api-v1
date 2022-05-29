const { sequelize } = require(".");


module.exports = (sequelize, Sequelize) => {
  const ShippingAddress = sequelize.define(
    "shipping_address",
    {
      title: {
        type: Sequelize.STRING,
      },
      street: {
        type: Sequelize.STRING,
      },
      street_nr: {
        type: Sequelize.STRING,
      },
      extension: {
        type: Sequelize.STRING,
      },
      post_code: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
    },
    {
      initialAutoIncrement: 10000,
    }
  );

  return ShippingAddress;
};
