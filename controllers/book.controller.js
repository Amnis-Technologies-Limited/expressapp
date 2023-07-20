const db = require('../models')
const Book = db.books

// Insert data
exports.create = (req, res) => {
    // validate the request
    if (!req.body.title) {
        res.status(400).send ({
            message: 'Book title cannot be empty'
        })
        return;
    }

    // Insert the book
    const book = {
        title: req?.body?.title,
        description: req?.body?.description,
        published: req?.body?.published ? req?.body?.published : false
    }

    Book.create(book).then(data => {
        res.send(data)
    })
    .catch (error => {
        res.status(500).send({
            message: error.message || 'Some error occured while creating the book'
        })
    })
}

// Retrieve all books
exports.findAll = (req, res) => {

}

// find a single book with an id
exports.fineOne = (req, res) => {

}

// Update a book
exports.update = (req, res) => {

}

// Delete a book
exports.delete = (req, res) => {

}

// Delete all books
exports.deleteAll = (req, res) => {
    
}

// Find all published
exports.findAllPublished = (req, res) => {

}