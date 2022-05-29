module.exports = (app) => {
  const products = require("../controllers/product.controller.js");
  var router = require("express").Router();

  router.post("/", products.create);

  router.post("/components/", products.addProductComponent);

  router.get("/components/:id", products.getProductComponents);

  router.delete("/components/:id", products.deleteProductComponent);

  router.put("/components/:id", products.updateProductComponent);

  router.get("/", products.findAll);

  router.get("/:id", products.findOne);

  router.put("/:id", products.update);

  router.delete("/:id", products.delete);

  router.delete("/", products.deleteAll);
  app.use("/api/products", router);
};
