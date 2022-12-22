const { DATE } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    
    const user = sequelize.define('connect4',{
        name:{
            type : DataTypes.STRING,
            allowNull: false
        },
        email:{
            type : DataTypes.STRING,
            allowNull: false
        },
        password:{
            type : DataTypes.STRING,
            allowNull: false
        },
        firstname:{
            type : DataTypes.STRING,
        },
        lastname:{
            type : DataTypes.STRING
        },
        ratings:{
            type: DataTypes.INTEGER,
            defaultValue : 0
        },
        maxRatings:{
            type: DataTypes.INTEGER,
            defaultValue : 0
        }
    })

    return user;
}

