const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Product = new Schema(
    {
        title:{type: String, required: true},
        description:{type: String, required: true},
        price:{type: String, required: true},
        // brand is referred differently as follows
        brand:{type : Schema.Types.ObjectId, ref : 'brands'},
    },{timestamps :true}
    )

    module.exports = mongoose.model('brands', Brand)






