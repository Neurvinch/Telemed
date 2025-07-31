require('dotenv').config();
const mongoose = require('mongoose');

const dotenv = require('dotenv');

const app = require('./index');

  const db = process.env.DB;

  mongoose.connect(db)
  .then(() => {
    console.log('MongoDB connected successfully');
  })

  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
