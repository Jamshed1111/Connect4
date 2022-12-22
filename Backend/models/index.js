const dbConfig = require('../config/dbConfig.js')

const { Sequelize,DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorAliases : false,
        pool:{
            max : dbConfig.pool.max,
            min : dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle : dbConfig.pool.idle
        }
    }
)

// const sequelize = new Sequelize('college','root','dev123',{
//     host : 'localhost',
//     dialect : 'mysql'
// });

sequelize.authenticate().then(()=>{
    console.log("connected...")
})
.catch(err=>{
    console.log(err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

//enter db.tablename

db.project = require('./Usermodule.js')(sequelize,DataTypes)

db.sequelize.sync({force:false}).then(()=>{
    console.log("sync done")
}) //if set true create new table again and again

module.exports = db;

