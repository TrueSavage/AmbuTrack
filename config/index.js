const Sequelize = require('sequelize')
let sequelize
if (process.env.JAWSDB_URL) {
    sequelize =new Sequelize(process.env.JAWSDB_URL)
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: 3306
    })
}
module.exports = sequelize
