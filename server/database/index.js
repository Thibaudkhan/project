/*const Sequelize = require("sequelize") 
const db = {}
const sequelize = new Sequelize("medica", "root", "", {   
host: "localhost",   
dialect: "mysql",   
operatorsAliases: false,   
pool: {     
    max: 5,     
    min: 0,     
    acquire: 30000,     
    idle: 10000   
} 
}) 
db.sequelize = sequelize 
// db.sequelize = sequelize 
module.exports = db*/

const mysql = require("mysql")

const pool = mysql.createPool({
    connectionLimit: 10,
    password : "",
    user: "root",
    database: "medica",
    host: "localhost",
    port : "3306"
})

 let medicaDb = {}

 medicaDb.all = ()=> {
    return new Promise((resolve,reject)=>{
        pool.query('Select * From user',(err,result)=>{
            if(err){
                return reject(err)
            }
            return resolve(result)
        })
    })
 }

 medicaDb.one = (id)=> {
    return new Promise((resolve,reject)=>{
        pool.query('Select * From user Where id = ?',[id],(err,result)=>{
            if(err){
                return reject(err)
            }
            return resolve(result[0])
        })
    })
 }

 module.exports = medicaDb