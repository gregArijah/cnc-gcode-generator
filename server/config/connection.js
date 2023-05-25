//import libraries
const mongoose = require('mongoose');

const uri = "mongodb+srv://gregarijah:Ax54I2SUHgmAkdpW@cluster0.24twaxc.mongodb.net/javatrolDB?retryWrites=true&w=majority"

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
