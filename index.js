const express = require('express')
const Sequelize = require('sequelize')
const Data = require('./data')

const app = express()
const port = 8001
const Connection = require('./config/Connection')
const User = require('./models/User')
const Post = require('./models/Post')
const Comment = require('./models/Comment')


Connection.sync({
    logging: console.log,
    force: true
}).then(() => {
    console.log('Connection to database established successfully.')
    app.listen(port, () => {
        console.log('Running server on port' + port)
    })
}).then(() => {
    User.bulkCreate(Data)
    console.log('Create data')
}).then(() => {
    Post.create({
        UserId: 1,
        title: "Hola post",
        description: "Prueba desde sequelize"
    })
})
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    })


