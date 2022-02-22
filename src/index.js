const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const req = require('express/lib/request')
const port = process.env.PORT || 3000
const execute_app = express()

//Conexión al puerto 3000
execute_app.listen(port, () =>{console.log('Listening the port', port)})

//Primer request para acceder a http://localhost:3000
execute_app.get('/home', (req, res) => res.send('Programación III'))

mongoose
        .connect(process.env.MONGODB_CONNECTION_STRING)
        .then(() => console.log('Connect with MongoDB'))
        .catch((error) => console.error(error))

const productSchemaRoutes = require('./routes/product_routes')
const clientSchemaRoutes = require('./routes/client_routes')

/*Middleware*/
execute_app.use(express.json())
execute_app.use('/dashboard', productSchemaRoutes)
execute_app.use('/dashboard', clientSchemaRoutes)