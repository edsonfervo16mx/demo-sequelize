const Sequelize = require('sequelize')
const Connection = require('../config/Connection')
/*Model User*/
const User = Connection.define('User', {
    /** 
    uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },/**/
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'no available'
    },
    //name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    address: Sequelize.STRING
})

//Model-definition in doc

//User.find

module.exports = User