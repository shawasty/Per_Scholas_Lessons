const { Router } =  require('express');
const controllers = require('../controllers')
const router = Router();

//CRUD  
//Reading from database

router.get('/', (req,res) => res.send('this is the root!!'))

router.post('/lambdishes', controllers.creatLambDish);

router.get('/lambdishes', controllers.getAllLambDishes);

module.exports = router;