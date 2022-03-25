const express = require("express");
const router = express.Router();
const {
  allOrders,
  postOrders,
  userOrders,
} = require("../controllers/orderController");

// allOrders
router.get("/", allOrders);

// get user orders
router.get("/user/:userId", userOrders);

// post orders
router.post("/", postOrders);

module.exports = router;
