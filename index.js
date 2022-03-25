const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 7070;
const dotenv = require("dotenv");
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_SECRET);

// route handlers
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoute");
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errorHandler");
const { calculateOrderAmount } = require("./utils/calculateOrderAmount");

const app = express();

connectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// default error handler
app.use(errorHandler);

// test route
app.get("/", (req, res) => {
  res.send("This is becakina website");
});

// payment post route
app.post("/create-payment-intent", async (req, res) => {
  try {
    const products = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(products),
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
