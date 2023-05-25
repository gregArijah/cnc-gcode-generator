

// module.exports = mongoose.connection;
const { MongoClient } = require('mongodb');

// Define the connection string for MongoDB Atlas
const uri = process.env.MONGODB_URI ||  `mongodb+srv://GregArijah:${process.env.ATLAS_PASSWORD}@developmentcluster.msqfvm5.mongodb.net/javatrolDB?retryWrites=true&w=majority`;

// Create a new MongoClient instance
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the MongoDB Atlas cluster
client.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = client;