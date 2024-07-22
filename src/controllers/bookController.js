const Book = require('../models/bookModel');

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            statusCode: 200,
            message: 'Books retrieved successfully',
            data: books
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({
            statusCode: 404,
            message: 'Book not found'
        });
        res.status(200).json({
            statusCode: 200,
            message: 'Book retrieved successfully',
            data: book
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
};

const createBook = async (req, res) => {
    const book = new Book(req.body);
    try {
        const newBook = await book.save();
        res.status(201).json({
            statusCode: 201,
            message: 'Book created successfully',
            data: newBook
        });
    } catch (err) {
        res.status(400).json({
            statusCode: 400,
            message: err.message
        });
    }
};

const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({
            statusCode: 404,
            message: 'Book not found'
        });
        res.status(200).json({
            statusCode: 200,
            message: 'Book updated successfully',
            data: book
        });
    } catch (err) {
        res.status(400).json({
            statusCode: 400,
            message: err.message
        });
    }
};

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({
            statusCode: 404,
            message: 'Book not found'
        });
        res.status(200).json({
            statusCode: 200,
            message: 'Book deleted successfully'
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
};

module.exports = { getBooks, getBookById, createBook, updateBook, deleteBook };
