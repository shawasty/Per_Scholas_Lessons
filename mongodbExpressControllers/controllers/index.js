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
//GET
async function getAllLambDishes(req,res){
    try{
        const lambDishes = await LambDish.find()
        return res.status(200).json({lambDishes})

    }catch(error){
        return res.status(500).send(error.message);
    }
}
// UPDATE
const updateLambDish =  (req, res) => {
    try {
      const { id } = req.params
     LambDish.findByIdAndUpdate(id, req.body, { new: true }, (err, lambDish) => {
       //debugging
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(lambDish)
          res.json(lambDish)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }
  async function deleteLambDish(req, res) {
    try {
      const { id } = req.params;
      const deleted = await LambDish.findByIdAndDelete(id)
      if (deleted) {
        return res.status(200).send("dish deleted");
      }
      throw new Error("dish not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  


module.exports = {
    creatLambDish,
    getAllLambDishes,
    updateLambDish,
    deleteLambDish,
}