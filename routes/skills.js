var express = require("express");
var router = express.Router();
const skillsCtrl = require("../controllers/skills");

// Get skills homepage
router.get("/", skillsCtrl.index);

//Get /skills/:id
router.get("/:id", skillsCtrl.show);

module.exports = router;
