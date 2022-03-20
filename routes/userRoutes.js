const express = require("express");
const { signup, signin } = require("../controllers/userController");
const router = express.Router();

// register a new user
router.post("/signup", signup);

// login existing user
router.post("/signin", signin);

module.exports = router;
