const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A title for book is required"],
    unique: true,
  },
  author: {
    type: String,
    required: [true, "An author is required for a book"],
  },
  publishYear: {
    type: Number,
    required: [true, "Published year is required for a book"],
  },
});

module.exports = mongoose.model("Book", bookSchema);
