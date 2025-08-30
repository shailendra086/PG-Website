require('dotenv').config();
const express = require('express');
const app = express();
const dbConfig = require('./config/database');
const authRoutes = require('./routes/auth');


//connection of database
dbConfig;

// Middleware to parse JSON requests
app.use(express.json());
app.get('/', (req, res) => { res.send('API running'); });

// Auth routes
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

