var MyAppModel = require('../config/db')

var Bill = new MyAppModel({tableName: 'bills'})

exports.all = () => {
    Bill.find('all',(err, rows, fields) => {
        if(err)
            return err
        console.log(rows)
    })
}