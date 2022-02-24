// CRUD actions in real world

const db = require('./db')
const Publisher = require('./models/book')
const Book = require('./models/book')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//working on CRUD actions
//Read
const findBook = async () => {
    // bring await to let the function shoot only if the database is there
    const thePowerOfNow = await Book.find({title: 'The Power of Now'})
    console.log(thePowerOfNow)
}

// Create 
const createBook = async () => {
    const penguinBooks = await Publisher.find({ name:'Penguin Books '})
    const aNewEarthBook = new Book({title: 'A New Earth', author: 'Eachart Tolle', published_date: '2005', published_id : penguinBooks[0]._id})
    await aNewEarthBook.save()
    console.log('created book:', aNewEarthBook)
}

// Update
const updateBook = async () => {
    const updated = await Book.updateOne({ title: "A New Earth" }, { title: "A New Earth: Awakening to Your Life's Purpose" })
    console.log(updated)
  }
// Destroy/delete
const deleteBook = async () => {
    const deleted = await Book.deleteOne({ title: "A New Earth" })
    console.log(deleted)
  }


  const run = async() => {
    // await findBook()
    // await createBook()
    // await updateBook()
    await deleteBook()
    db.close()
  }
  
  
  run()