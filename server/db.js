// server/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://kankshigupta04:kVYpco2io54p2QyD@cluster0.ckg5qe6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
