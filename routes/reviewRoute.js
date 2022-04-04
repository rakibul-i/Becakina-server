const express = require("express");
const { reviews, addReview } = require("../controllers/reviewController");
const router = express.Router();

router.get("/", reviews);

router.post("/", addReview);

module.exports = router;
