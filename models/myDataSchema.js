const mongoose = require('mongoose')
const schema = mongoose.Schema
const myDataSchema = new schema({
    title:String,
    summary : String,
    body : String,
})
module.exports = mongoose.model('myData',myDataSchema) ; 