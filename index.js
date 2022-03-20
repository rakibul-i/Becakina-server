const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 7070;

// route handlers
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

connectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// default error handler
app.use(errorHandler);

// test route
app.get("/", (req, res) => {
  res.send("This is becakina website");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
