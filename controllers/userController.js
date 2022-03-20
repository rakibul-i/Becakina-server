const bcrypt = require("bcrypt");

const { User } = require("../models/userModel");
const { generateToken } = require("../utils/generateToken");

// create new user
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(500).json("User Already Exists");
    } else {
      const user = await User.create({ username, email, password });

      if (user) {
        res.status(201).json({
          _id: user._id,
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
          photoURL: user.photoURL,
          token: generateToken(user._id),
        });
      } else {
        res.status(400).json("User Already Exists");
      }
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        photoURL: user.photoURL,
        token: generateToken(user._id),
      });
    } else {
      res.status(500).send("Authentication failed");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { signup, signin };
