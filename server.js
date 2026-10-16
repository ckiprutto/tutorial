
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
const index = require('./routes/index');
const image = require('./routes/image');

const app = express();

// View engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON
app.use(express.json());

// Routes
app.use('/', index);
app.use('/image', image);

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Connect to MongoDB Atlas
const mongodbUri = process.env.MONGODB_URI;

if (!mongodbUri) {
    console.error('MONGODB_URI environment variable is missing');
} else {
    mongoose.connect(mongodbUri)
        .then(() => {
            console.log('Connected to MongoDB successfully');
        })
        .catch((err) => {
            console.error('MongoDB connection error:', err.message);
        });
}
