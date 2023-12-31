const { Sequelize, sequlize } = require(".");

module.exports = (sequlize, Sequelize) => {
    const User = sequlize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    })

    return User
}