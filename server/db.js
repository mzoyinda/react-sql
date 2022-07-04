const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'dawodu123',
    database: 'the-edge-app',
    port: 8000
})

module.exports = connection;