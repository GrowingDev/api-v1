const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "product",
    {
      title: {
        type: Sequelize.STRING,
      },
      collection: {
        type: Sequelize.STRING,
      },
      etui: {
        type: Sequelize.STRING,
      },
      furniture: {
        type: Sequelize.STRING,
      },
      inlay: {
        type: Sequelize.STRING,
      },
      box: {
        type: Sequelize.STRING,
      },
      weight: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.STRING,
      },
      ean: {
        type: Sequelize.STRING,
      },
      eori: {
        type: Sequelize.STRING,
      },
      img_front: {
        type: Sequelize.STRING,
      },
      img_back: {
        type: Sequelize.STRING,
      },
      img_etui: {
        type: Sequelize.STRING,
      },
      img_box: {
        type: Sequelize.STRING,
      },
      set: {
        type: Sequelize.STRING,
      },
      completition: {
        type: Sequelize.STRING,
      },
      packaging: {
        type: Sequelize.STRING,
      },
      logistic: {
        type: Sequelize.STRING,
      },
      license: {
        type: Sequelize.STRING,
      },
      price_private: {
        type: Sequelize.STRING,
      },
      price_business: {
        type: Sequelize.STRING,
      },
      bill_sum_01: {
        type: Sequelize.STRING,
      },
      bill_sum_02: {
        type: Sequelize.STRING,
      },
      bill_sum_03: {
        type: Sequelize.STRING,
      },
      bill_sum_04: {
        type: Sequelize.STRING,
      },
    },
    {
      initialAutoIncrement: 10000,
    }
  );

  return Product;
};
