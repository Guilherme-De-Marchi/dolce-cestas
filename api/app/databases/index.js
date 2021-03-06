const mysql = require('mysql2');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../configs/database/databases`)[env];

var sequelizeDatabases = {};
var databases = Object.keys(config.databases);

for (let i=0; i < databases.length; i++) {
    let database = databases[i];
    let databasePath = config.databases[database];

    let mysql_connection = mysql.createConnection({
        host: databasePath.host,
        port: databasePath.port,
        user: databasePath.username,
        password: databasePath.password,
    });

    mysql_connection.query(
        `CREATE DATABASE IF NOT EXISTS ${databasePath.database}`,
        (err) => { if (err) console.log(err) },
    )

    sequelizeDatabases[database] = new Sequelize(
        databasePath.database,
        databasePath.username,
        databasePath.password,
        databasePath,
    );
}

module.exports = sequelizeDatabases;