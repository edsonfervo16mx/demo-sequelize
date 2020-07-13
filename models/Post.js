const Sequelize = require('sequelize')
const Connection = require('../config/Connection')

const User = require('./User')
/** Model Post */

const Post = Connection.define('Post', {
    title: Sequelize.STRING,
    description: Sequelize.STRING
})

//User.hasOne(Post) // 1: 1 relationship between
User.hasMany(Post)// 1: Many relationship beteen


module.exports = Post