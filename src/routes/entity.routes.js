module.exports = (app) => {
  const entitys = require("../controllers/entity.controller.js");
  var router = require("express").Router();

  router.post("/", entitys.create);

  router.get("/", entitys.findAll);

  router.get("/:id", entitys.findOne);

  router.put("/:id", entitys.update);

  router.delete("/:id", entitys.delete);

  router.delete("/", entitys.deleteAll);
  app.use("/api/entitys", router);
};
