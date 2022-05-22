module.exports = (app) => {
    const prints = require("../controllers/print.controller.js");
    var router = require("express").Router();
  
    router.post("/", prints.create);
  
    router.get("/", prints.findAll);
  
    router.get("/:id", prints.findOne);
  
    router.put("/:id", prints.update);
  
    router.delete("/:id", prints.delete);
  
    router.delete("/", prints.deleteAll);
    app.use("/api/prints", router);
  };