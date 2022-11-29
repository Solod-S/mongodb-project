const express = require("express");
const router = express.Router();
const { tryCatch } = require("../../middlewares");
const { products: ctrl } = require("../../controlers");
router.get("/", tryCatch(ctrl.getAll));
router.post("/", tryCatch(ctrl.add));

module.exports = router;
