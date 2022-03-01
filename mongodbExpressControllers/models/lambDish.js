const mongoose = require('mongoose')

const Schema = mongoose.Schema

const LambDish = new Schema (
    {
        title: {type: String, required: true }, 
        ingredients: {type: String, required: true },
        country_of_origin: {type : String, ref : 'countryOfRecipe'},
        image: {type: String, required: true },
    },
    {timestamps: true}
)


module.exports = mongoose.model('lambDish',LambDish)