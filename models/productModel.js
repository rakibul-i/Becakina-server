const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  key: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  seller: {
    type: String,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  star: {
    type: Number,
    require: true,
  },
  starCount: {
    type: Number,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  shipping: {
    type: Number,
    require: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
