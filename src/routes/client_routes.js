const express = require('express')
const clientSchema = require('../models/client')
const route = express.Router()

/*Crear la ruta para la creación de usuarios*/
route.post('/client', (req, res) => {
    const client = clientSchema(req.body)
    client
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Listar los usuarios existentes*/
route.get('/clients', (req, res) => {
    clientSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Mostrar información de un usuario específico */
route.get('/clients/:id', (req, res) => {
    const {id} = req.params
    clientSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Eliminar usuario específico*/
route.delete('/clients/:id', (req, res) => {
    const {id} = req.params
    clientSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Editar un recurso específico*/
route.put('/clients/:id', (req, res) => {
    const {id} = req.params
    const {name, lastname, count_bank, address} = req.body
    clientSchema
        .updateOne({_id: id}, {$set:{name, lastname, count_bank, address}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = route