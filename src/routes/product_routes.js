const express = require('express')
const productSchema = require('../models/product')
const route = express.Router()

/*Crear la ruta para la creación de usuarios*/
route.post('/product', (req, res) => {
    const product = productSchema(req.body)
    product
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Listar los usuarios existentes*/
route.get('/products', (req, res) => {
    productSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Mostrar información de un usuario específico */
route.get('/products/:id', (req, res) => {
    const {id} = req.params
    productSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Eliminar usuario específico*/
route.delete('/products/:id', (req, res) => {
    const {id} = req.params
    productSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Editar un recurso específico*/
route.put('/products/:id', (req, res) => {
    const {id} = req.params
    const {product, img, price, cant, state} = req.body
    productSchema
        .updateOne({_id: id}, {$set:{product, img, price, cant, state}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = route