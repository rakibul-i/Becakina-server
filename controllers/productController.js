const { Product } = require("../models/productModel");
const mongoose = require("mongoose");

// get all products
const getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);

    // search for products
    const name = req.query.name
      ? {
          $or: [
            { name: { $regex: req.query.name, $options: "i" } },
            { category: { $regex: req.query.name, $options: "i" } },
          ],
        }
      : {};
    const count = await Product.find(name).count();
    let products;
    if (page) {
      products = await Product.find(name)
        .skip(page * size)
        .limit(size);
    } else {
      products = await Product.find(name).limit(size);
    }

    res.json({
      count: count,
      data: products,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// search products
const searchProducts = async (req, res) => {
  try {
    const name = req.query.name
      ? {
          $or: [
            { name: { $regex: req.query.name, $options: "i" } },
            { category: { $regex: req.query.name, $options: "i" } },
          ],
        }
      : {};
    const products = await Product.find(name);

    res.json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// get a product by id
const getAProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: mongoose.Types.ObjectId(id) };
    const result = await Product.findOne(query);
    res.json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { getAllProducts, getAProduct, searchProducts };
