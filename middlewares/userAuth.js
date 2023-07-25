const db = require('../models')
const User = db.user

const signup = async (req, res, next) => {
    try {
        const username = await User.findOne({
            where: {
                username: req.body.username
            }
        })

        if (username) {
            return res.json(409).send({
                statusCode: 200,
                status: 'success',
                message: 'User already exist'
            })
        }


        const checkmail = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        if (checkmail) {
            return res.json(409).send({
                statusCode: 200,
                status: 'success',
                message: 'Email used!'
            })
        }
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            status: 'rejected',
            message: error?.response?.data
        })
    }
}

module.exports = {
    signup
}