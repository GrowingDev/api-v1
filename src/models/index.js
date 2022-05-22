const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.articles = require("./article.model.js")(sequelize, Sequelize);
db.billing_addresses = require("./billing_address.model.js")(sequelize, Sequelize);
db.collections = require("./collection.model.js")(sequelize, Sequelize);
db.contacts = require("./contact.model.js")(sequelize, Sequelize);
db.entitys = require("./entity.model.js")(sequelize, Sequelize);
db.prints = require("./print.model.js")(sequelize, Sequelize);
db.products = require("./product.model.js")(sequelize, Sequelize);
db.shipping_addresses = require("./shipping_address.model.js")(sequelize, Sequelize);


db.articles.belongsToMany(db.products, { through: 'articleGroups' });
db.products.belongsToMany(db.articles, { through: 'articleGroups' });
db.contacts.belongsTo(db.entitys);
db.entitys.hasOne(db.contacts, {
  foreignKey: "contact",
});
db.shipping_addresses.belongsTo(db.entitys);
db.billing_addresses.belongsTo(db.entitys);
db.entitys.hasOne(db.billing_addresses, {
  foreignKey: "billing_address",
});
db.entitys.hasOne(db.shipping_addresses, {
  foreignKey: "shipping_address",
});
module.exports = db;