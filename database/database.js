const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST_DEV,
    user: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV
    } 
)

connection.connect((error) => {
    if(error){
        console.error('Connection error: ', error)
        return
    }
    console.log('Database connected.')
})

module.exports = connection;