const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Book = new Schema(
    {
        title:{ type : String, required: true},
        author:{ type : String, required: true},
        published_date:{ type : String, required: true},// snake case instead of camelCase
        publisher_id :{type: Schema.Types.ObjectId, ref:'publisher_id'},
    },
    {timestamps:true}
)

module.exports = mongoose.model('books', Book)