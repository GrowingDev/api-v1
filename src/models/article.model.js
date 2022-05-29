const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define(
    "article",
    {
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      supplier: {
        type: Sequelize.STRING,
      },
      group: {
        type: Sequelize.STRING,
      },
      supplier_article_id: {
        type: Sequelize.STRING,
      },
      ean: {
        type: Sequelize.STRING,
      },
      eori: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      marge: {
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

  return Article;
};
