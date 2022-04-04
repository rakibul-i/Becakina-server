const Review = require("../models/reviewModel");

const reviews = async (req, res) => {
  try {
    const results = await Review.find({}).populate(
      "userId",
      "-_id username email"
    );
    res.json(results);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

const addReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    const result = await review.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

module.exports = { reviews, addReview };
