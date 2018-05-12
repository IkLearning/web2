var MyAppModel = require('../config/db')

const Product = new MyAppModel({tableName: 'products'})

exports.all = (req, res) =>{
    Product.find('all', (err, rows, fields) => {
        if(err)
            return err
        res.send(rows)
    })
}

exports.create = (req, res) =>{

    product = new Product({

    })

    product.save((err, res) => {
        if(err)
            return err
        res.send(res[0])
    })

}

exports.findById = (req, res) =>{
    Product.find('first', {where: `id = ${req.params.id}`}, (err, row) =>{
        if(err)
            return err
        res.send(row)
    })
}

exports.update = (req, res) =>{
    product = new Product

    product.read(req.body.id, (err) => {
        if(err)
            return err
        product.title = '123123'
        product.save((err, row) => {
            if(err)
                return err
            res.send(row)
        })
    })
}

exports.delete = (req, res) =>{
    product = new Product
    product.set('id', req.body.id)
    product.remove((err, row) => {
        if(err)
            return err
        res.send(row)
    })
}