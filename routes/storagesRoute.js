const express = require("express");
const router = express.Router();
const storageController = require("../controllers/storageController");

router.get("/*/:img", storageController.viewImg);


module.exports = router;