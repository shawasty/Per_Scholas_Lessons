const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/booksDatabase',{useUnifiedTopology:true, useNewUrlParser:true}).then(()=>{
    console.log('successfuly connected to MongoDB');
}).catch(e =>{
    console.error('connection error', e.message)
})


// debugging tool that will show the raw querry mongo as it executes

mongoose.set('debug',true)

const db = mongoose.connection

module.exports = db

//