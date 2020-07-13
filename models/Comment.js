const Sequelize = require('sequelize')
const Connection = require('../config/Connection')

const Comment = Connection.define('Comment', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
})

module.exports = Comment