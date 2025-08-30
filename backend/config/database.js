const mongoose = require('mongoose');

//db connection
mongoose.connect('mongodb://localhost:27017/Pgwebsite', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Database connected successfully');
})
.catch((err) => {
  console.error('Database connection error:', err);
});
