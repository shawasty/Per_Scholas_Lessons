const LambDish = require ('../models/lambDish');
const Country = require('../models/countryOfRecipe');
const res = require('express/lib/response');

// CREATE
async function creatLambDish ( req,res){

    try{
        const lambDish = await new LambDish(req.body)
        await lambDish.save()
        return res.status(201).json({
            lambDish,
        })

    }catch (error) {
        return res.status(500).json({error:error.message})

    }
} 

async function getAllLambDishes(req,res){
    try{
        const lambDishes = await LambDish.find()
        return res.status(200).json({lambDishes})

    }catch(error){
        return res.status(500).send(error.message);
    }
}

module.exports ={
    creatLambDish,
    getAllLambDishes,
}