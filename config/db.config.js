module.exports = {
    HOST: 'localhost',
    USER: 'amnis',
    PASSWORD: 'bacckend',
    DB: 'budobe',
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}