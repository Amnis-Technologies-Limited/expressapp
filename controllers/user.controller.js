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

            res.cookie("jwt", token, {maxAge:  1 * 24 * 60 * 60, httpOnly: true})
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

    }
}


module.exports = {
    createUser
}