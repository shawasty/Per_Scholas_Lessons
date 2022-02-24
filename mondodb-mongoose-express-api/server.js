

const express = require('express');
const PORT = process.env.PORT || 3000;
const db = require ('./db/index');
const products = require('./models/products');


const app = express()

db.on('error', console.error.bind(console,'MongoDB connection error:'))

app.listen(PORT,()=>{
    console.log(`Express server listening on port${PORT}`);
})

app.get('/', (req,res) =>{
    res.send('This is the root')
})

//route that shows all products

app.get('/products', async(req,res)=> {
    const products = await Products.find()
    res.json(products)
})
// finding a specific product
//if there is an error, we will not
// see it 
//unless we use a try catch
app.get('/products/:id', async (req, res)=>{
    try{
        const {id} = req.params
        const product = await product.findById(id)
        res.json(product)
    }catch (e){
        console.log(e)
        res.send('product not found')
    }
})