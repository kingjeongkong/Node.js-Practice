const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, { dbName: 'CompanyDB' });
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
