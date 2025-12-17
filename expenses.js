const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// Add expense
router.post("/add", async (req, res) => {
  const expense = new Expense(req.body);
  await expense.save();
  res.json("Expense added");
});

// Get expenses
router.get("/:userId", async (req, res) => {
  const data = await Expense.find({ userId: req.params.userId });
  res.json(data);
});

module.exports = router;
