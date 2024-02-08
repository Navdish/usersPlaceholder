const mongoose = require('mongoose')

const User = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    address: {
        type: Object,
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            type: Object,
            lat: String,
            lng: String
        }
    },
    phone: String,
    website: String,
    company: {
        type: Object,
        name: String,
        catchPhrase: String,
        bs: String
    }
})

// const geoSchema = mongoose.Schema({
//     lat: String,
//     lng: String
// })
// const addressSchema = mongoose.Schema({
//     street: String,
//     suite: String,
//     city: String,
//     zipcode: String,
//     geo: geoSchema
// })
// const companySchema = mongoose.Schema({
//     name: String,
//     catchPhrase: String,
//     bs: String
// })

// const User = mongoose.Schema({
//     name: String,
//     username: String,
//     email: String,
//     address: addressSchema,
//     phone: String,
//     website: String,
//     company: companySchema
// })


const Users =  mongoose.model('UserModel', User);
module.exports = Users;