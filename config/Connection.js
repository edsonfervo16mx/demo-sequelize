const Sequelize = require('sequelize')

const Connection = new Sequelize('mydbsequelize', 'edsonfer', 'hack1024', {
    dialect: 'mysql'
})

module.exports = Connection