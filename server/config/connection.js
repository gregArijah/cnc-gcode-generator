//import libraries
require('dotenv').config();

const mongoose = require('mongoose');

//const uri = process.env.MONGODB_URI;
const uri = 'mongodb://127.0.0.1:27017/javatrol'

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database');
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});

module.exports = mongoose.connection;

// //import libraries
// const mongoose = require('mongoose');

// //define connection string
// const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/javatrol';

// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to the database');
// }).catch((error) => {
//   console.error('Error connecting to the database:', error);
// });

// module.exports = mongoose.connection;