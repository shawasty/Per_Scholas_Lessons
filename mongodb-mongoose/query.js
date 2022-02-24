const db = require('./db')
const User= require('./models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// const createUser = async () => {
//     const penguinBooks = await Publisher.find({ name:'Penguin Books '})
//     const aNewEarthBook = new Book({title: 'A New Earth', author: 'Eachart Tolle', published_date: '2005', published_id : penguinBooks[0]._id})
//     await aNewEarthBook.save()
//     console.log('created book:', aNewEarthBook)
// }
// find all users
const findUsers = async () => {
    // bring await to let the function shoot only if the database is there
    const allUsers = await User.find({name: 'Joey'},{name: 'Abe'},{name: 'Sunny'})
    console.log(allUsers)
}

// find a specific user

const findAuser = async () => {
    // bring await to let the function shoot only if the database is there
    const oneUser = await User.find({name: 'Joey'})
    console.log(oneUser)
}

// create user
const createUser = async () => {
const user1 = await new User({ name: 'Mane', age: 29, status: 'active'})
    user1.save()
    console.log('created :', user1)
}
// deletes User
const deleteuser = async () => {
    const deleted = await User.deleteOne({ name: 'Sunny'})
    console.log(deleted)
  }

const run = async() => {
    // await findUsers()
    await findAuser()
    // await createUser()
    // await updateUser()
    // await deleteUser()
    db.close()
  }
  
  
  run()