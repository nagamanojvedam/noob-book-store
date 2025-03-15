const Book = require("../models/bookModel");

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      status: "success",
      length: books.length,
      data: {
        books,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Unable to get all bookings",
    });
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const { title, author, publishYear } = req.body;
    const newBook = { title, author, publishYear };

    const book = await Book.create(newBook);

    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: `${err}`,
    });
  }
};

exports.getBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) throw new Error(`Cannot find the book with the ${id}`);

    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        book: updatedBook,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "cannot update book",
    });
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await Book.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      data: {
        deleted,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Cannot find the book with the id",
    });
  }
};
