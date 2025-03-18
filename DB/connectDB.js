// db.js
const mongoose = require('mongoose');

const connectDB = (dbName) => {
  mongoose.connect(process.env.MONGODB_URI, { 
    dbName:dbName,
})
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('MongoDB connection error:', err));
};

module.exports = connectDB;
