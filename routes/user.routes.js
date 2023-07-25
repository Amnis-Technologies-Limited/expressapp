module.exports = app => {
    const userController = require('../controllers/user.controller.js')
    const { login, createUser } = userController
    const userAuth = require('../middlewares/userAuth.js')
    const express = require('express')

    let router = express.Router()

    router.post('/signup', userAuth.signup, createUser)
    router.post('/login', login)

    app.use('/api/v1/users', router)
}