const db = require('./db')
const User= require('./models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



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
const deleteUser = async () => {
    const deleted = await User.deleteOne({ name: 'Sunny'})
    console.log(deleted)
  }
  const updateUser = async () => {
    const updated = await User.updateOne({ name: 'Lizzy', age: 29, status: 'inactive' })
    console.log(updated)
  }

const run = async() => {
    // await findUsers()
    // await findAuser()
    // await createUser()
    // await updateUser()
    // await deleteUser()
    db.close()
  }
  
  
  run()

