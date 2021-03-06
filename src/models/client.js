const mongoose = require('mongoose')
const client_schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    count_bank: {
        type: String,
        require: true
    },
    address: {
        city: {
            type: String,
            require: true
        },
        code_zip: {
            type: Number,
            require: true
        },
        lat: {
            type: Number,
            require: true
        },
        len: {
            type: Number,
            require: true
        }
    }
})

module.exports = mongoose.model('client_document', client_schema)