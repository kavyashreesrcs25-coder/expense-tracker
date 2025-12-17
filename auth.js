const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Signup
router.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json("User registered");
});

// Login
router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  res.json(user);
});

module.exports = router;
