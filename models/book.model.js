const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
        titile: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    })

    return Book;
}