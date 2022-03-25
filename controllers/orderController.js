const Order = require("../models/orderModel");
const mongoose = require("mongoose");

// get all orders
const allOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get user orders
const userOrders = async (req, res) => {
  try {
    const userId = req.params.userId;
    const query = { userId: mongoose.Types.ObjectId(userId) };
    const orders = await Order.find(query)
      .populate("productId", "price name")
      .populate("userId", "username email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// post  orders
const postOrders = async (req, res) => {
  try {
    const results = await Order.insertMany(req.body);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { allOrders, postOrders, userOrders };
