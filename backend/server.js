const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Set your desired port number

// Replace your connection string here
const DB_HOST = 'cluster0.lmdpixg.mongodb.net';
const DB_USER = 'admin';
const DB_PASSWORD = 'Z3YkAPgIrTdJUIxO';
const DB_NAME = 'chatApp';
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// Connect to MongoDB Atlas
mongoose.connect(DB_CONNECTION_STRING)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(error => console.error('Error connecting to MongoDB Atlas:', error));

// Import required modules for user authentication
const { signupHandler, loginHandler } = require('./authHandlers');

// Middleware to parse JSON bodies
app.use(express.json());

// Route for user signup
app.post('/signup', signupHandler);

// Route for user login
app.post('/login', loginHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});
