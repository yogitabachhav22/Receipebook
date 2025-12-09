const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: String,
  image: String,
  cuisine: String,
  tags: [String],
  rating: Number,
  ingredients: [String],
  instructions: [String]
});

module.exports = mongoose.model("Recipe", recipeSchema);