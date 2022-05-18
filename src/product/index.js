const express = require("express");
const router = express.Router();

const { listAction, detailAction, filterAction } = require("./controller");

router.get("/", listAction);
router.get("/:id", detailAction)
router.get("/filter/:id", filterAction);
module.exports = router;
