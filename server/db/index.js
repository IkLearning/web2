var mysqlModel = require('mysql-model')

var MyAppModel = mysqlModel.createConnection({
    host          : 'localhost',
    user          : 'root',
    password      : '',
    database      : 'web2'
})


module.exports = MyAppModel