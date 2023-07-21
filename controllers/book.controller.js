const db = require('../models')
const Book = db.books

// Insert data
exports.create = (req, res) => {
    // validate the request
    if (!req.body.title) {
        res.status(400).send({
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
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Some error occured while creating the book'
            })
        })
}

// Retrieve all books
exports.findAll = (req, res) => {
    Book.findAll()
        .then(data => {
            res.status(200).send({
                statusCode: 200,
                status: 'success',
                messsage: 'Books retrieved successfully',
                data: data
            })
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Something went wrong while fetching all books.'
            })
        })
}

// find a single book with an id
exports.fineOne = (req, res) => {
    const id = req.body.id

    Book.findByPk(id)
        .then(data => {
            if (data) {
                res.status(200).send({
                    statusCode: 200,
                    status: 'success',
                    messsage: 'Book retrieved successfully',
                    data: data
                })
            } else {
                res.status(400).send({
                    statusCode: 400,
                    status: 'success',
                    messsage: 'Book not found',
                })
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Something went wrong while fetching the book.'
            })
        })
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