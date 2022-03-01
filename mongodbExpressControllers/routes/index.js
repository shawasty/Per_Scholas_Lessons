const { Router } =  require('express');
const router = Router();

//CRUD  
//Reading from database

router.get('/', (req,res) => res.send('this is the root!!'))



module.exports = router;