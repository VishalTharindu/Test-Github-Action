const express = require('express');
const mongooes = require('mongoose');
const config = require('config');
const boodyParser = require('body-parser');
const passport = require('passport');

//App initialization
const app = express();
app.use(boodyParser.json());

// DB confuguration
const db  = config.get('mongoURI');

// Connect to MongoDB
mongooes.connect(db)
.then(() => console.log("Mongo Connected..."))
.catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//Routes
app.use('/api/auth', require('./routes/auth'));
// app.use('/api/products', require('./routes/products'));
// app.use('/api/orders', require('./routes/orders'));

// Define the PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));