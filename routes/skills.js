var express = require("express");
var router = express.Router();
const skillsCtrl = require("../controllers/skills");

// Get skills homepage
router.get("/", skillsCtrl.index);

//Get /skills/new
router.get("/new", skillsCtrl.new);

//Get /skills/:id
router.get("/:id", skillsCtrl.show);

//Post new skill
router.post("/", skillsCtrl.create);

router.delete("/:id", skillsCtrl.delete);

module.exports = router;
