const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      require: true,
    },
    shippingAddress: {
      country: {
        type: String,
        require: true,
      },

      region: {
        type: String,
        require: true,
      },
      phone: {
        type: String,
        require: true,
      },
    },
    billing: {
      type: String,
      default: "paid",
    },
    transectionId: {
      type: String,
      require: true,
    },
    orderStatus: {
      type: String,
      default: "on process",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
