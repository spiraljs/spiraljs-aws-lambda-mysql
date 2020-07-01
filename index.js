var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'your host',
    user: 'user-id',
    password: 'pwd',
    database: 'db-name',
    port: '3306'
});

exports.handler = (event, context, callback) => {
    connection.connect();

    connection.query('SELECT * FROM Table', function (error, results, fields) {
        connection.end();

        if (error) {
            console.error(error);
            throw error;
        } else {
            results = JSON.stringify(results, null, 4);
            console.log(results);
        }
    });
}