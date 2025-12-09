const express = require("express");
const Recipe = require("../models/Recipe");
const router = express.Router();

// Get all recipes
router.get("/", async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

// Get one recipe
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
  } catch (err) {
    res.status(400).json({ error: "Invalid recipe ID" });
  }
});

// Create recipe
router.post("/", async (req, res) => {
  const recipe = await Recipe.create(req.body);
  res.json(recipe);
});

// Update recipe
router.put("/:id", async (req, res) => {
  const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(recipe);
});

// Delete recipe
router.delete("/:id", async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
