const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Country = new Schema(
    {
        name: {type: String, required: true },
        recipe:{type: String, required:true},
        
    },
    {timestamps: true}
)


module.exports = mongoose.model('countryOfOrigin',Country)