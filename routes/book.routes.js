module.exports = app => {
    const book = require('../controllers/book.controller.js')

    let router = require('express').Router()

    router.post('/', book.create)
    router.get('/books', book.findAll)

    app.use('/api/v1/books', router)
}