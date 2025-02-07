// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
dotenv.config();
connectDB();
const app = express();
app.use(cors()); 
app.use(express.json()); 

app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.get('/', (req, res) => {
  res.send('Welcome to the Event Notification API');
});
app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});
module.exports = app;
