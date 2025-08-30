const mongoose = require('mongoose');

// Prefer environment variable, fallback to local dev
const MONGODB_URI = process.env.MONGODB_URI;

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      // modern mongoose no longer needs useNewUrlParser/useUnifiedTopology
    });
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
}

connectDB();

module.exports = mongoose;
