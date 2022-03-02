const express = require('express');
const routes = require('./routes');
const db = require('./db');
// introduce this as a debugger tool
const logger = require ('morgan');

const PORT = process.env.PORT || 3001;

// const app = express();

const app = express();

//debugger related to morgan
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(logger('dev'));

app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.listen(PORT , () => console.log(`listening on port ${PORT}`) )