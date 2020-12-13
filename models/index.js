const {Sequelize, DataTypes} = require('sequelize');
const UserModel = require('./users')

const sequelize = new Sequelize('2qym8GQCbH','2qym8GQCbH', 'ZJMvV6PpNJ', {
    host:'remotemysql.com',
    port:'3306',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({force: false})
.then(() => {
    console.log('Tablas sincronizadas.')
});

module.exports={
    User
}