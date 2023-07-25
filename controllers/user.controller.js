const bcrypt = require('bcrypt')
const db = require('../models')
const jwt = require('jsonwebtoken')

const User = db.user


const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const data = {
            username,
            email,
            password: await bcrypt.hash(password, 10)
        }

        // Save the user info
        const user = await User.create(data)

        if (user) {
            let token = jwt.sign({ id: user.id },
                process.env.secretKey, {
                expiresIn: 1 * 24 * 60 * 60 * 1000
            })

            res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true })
            console.log("user: ", JSON.stringify(user, null, 2))
            console.log("token: ", token)

            return res.status(201).send({
                statusCode: 200,
                status: 'success',
                message: 'Signup successful',
                data: user
            })

        }
    } catch (error) {
        console.log('Error creating user: ', error)
    }
}

// Login endpoint
const login = async (req, res) => {
    try {
        const { email, password } = req.body

        // find a user by the email above
        const user = await User.findOne({
            where: {
                email: email
            }
        })

        if (user) {
            const correctPassword = await bcrypt.compare(password, user.password)

            if (correctPassword) {
                let token = jwt.sign({ id: user.id },
                    process.env.secretKey, {
                    expiresIn: 1 * 24 * 60 * 60 * 1000
                })

                res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true })
                console.log("user: ", JSON.stringify(user, null, 2))
                console.log("token: ", token)

                return res.status(201).send({
                    statusCode: 200,
                    status: 'success',
                    message: 'login successful',
                    data: user
                })
            } else {
                return res.status(401).send({
                    statusCode: 401,
                    status: 'success',
                    message: 'Access denied',
                })
            }
        }
    } catch (error) {
        console.log('Error login: ', error)
    }
}

module.exports = {
    createUser,
    login
}