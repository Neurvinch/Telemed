require('dotenv').config();
const mongoose = require('mongoose');

const dotenv = require('dotenv');

const index = require('./index');

  const db = process.env.DB;

  mongoose.connect(db)
  .then(() => {
    console.log('MongoDB connected successfully');
  })

  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
