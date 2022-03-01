const db = require('../db')
const LambDish = require('../models/lambDish')
const Country = require('../models/countryOfRecipe')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const country1 = await new Country({ name: 'Ghana', recipe: 'spicy harissa'})
    country1.save();

    const country2 = await new Country({ name: 'Portland', recipe: 'rose petal' })
    country2.save();

    const country3 = await new Country({ name: 'Nigeria', recipe: 'rosemary and thyme' })
    country3.save()


    const lambDishes = [
        { title: 'Braised Lamb Shoulder', ingredients: '3 lb. lamb shoulder,1⁄4 cup kosher salt,1 tbsp. sugar, 1 cup finely chopped carrots,Dried edible rose petals', image: 'https://www.saveur.com/uploads/2019/03/18/EHNTE52OOEPIZPM3OPG4YDIITA-1024x768.jpg', country_of_origin: country2.name },
        {
            title: 'Lamb Ribs with Spicy Harissa', ingredients: '1 tbsp. ground coriander,1 tbsp. ground cumin,2 tbsp. honey,2 tsp. Worcestershire sauce', image: 'https://www.saveur.com/uploads/2019/05/23/Y4EDXCXV36LPRB55VXCLGMGUNE.jpg', country_of_origin: country1.name

        },
        {
            title: 'Rack of Lamb with rosemary and thym', ingredients: '2 tbsp. extra-virgin olive oil,10 cloves garlic,chopped fresh thyme, plus 4 sprigs', image: 'https://www.saveur.com/uploads/2019/05/23/Y4EDXCXV36LPRB55VXCLGMGUNE.jpg', country_of_origin: country3.name

        }
        
    ]
    await LambDish.insertMany(lambDishes)
    console.log('Created some lambDishes')

}

const run = async () => {
    await main()
    db.close()
  }
  
  run()


