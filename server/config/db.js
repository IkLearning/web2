var mysqlModel = require('mysql-model')

var MyAppModel = mysqlModel.createConnection({
    host          : 'localhost',
    user          : 'root',
    password      : '',
    database      : 'fakedy'
})

module.exports = MyAppModel