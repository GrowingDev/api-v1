const express = require("express");
const router = express.Router();
const { listAction, detailAction } = require("./controller");

router.get("/", listAction);
router.get("/:id", detailAction)
module.exports = router;
