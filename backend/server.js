const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Create enviroment Variables in env file
require('dotenv').config();

//How we create our express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware - allows use to parse JSON
app.use(cors());
app.use(express.json());

//Database Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Database connection established successfully");
})

// Require Routes Files

const itemsRouter =  require('./routes/items');
const itemDetailsRouter =  require('./routes/itemdetails');

app.use('/items', itemsRouter);
app.use('/itemdetails', itemDetailsRouter);

//Starts the server listener
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

