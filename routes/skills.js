var express = require("express");
var router = express.Router();
const skillsCtrl = require("../controllers/skills");

// Get skills homepage
router.get("/", skillsCtrl.index);

module.exports = router;
