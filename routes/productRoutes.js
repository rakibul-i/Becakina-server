const express = require("express");
const {
  getAllProducts,
  getAProduct,
  searchProducts,
} = require("../controllers/productController");
const router = express.Router();

// get all products
router.get("/", getAllProducts);

// search products
router.get("/search", searchProducts);

// get a product
router.get("/singleProduct/:id", getAProduct);

module.exports = router;
