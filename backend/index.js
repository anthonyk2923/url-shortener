console.clear();
const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('colors');
const connectDB = require('./config/db');

connectDB.connectDb();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/links', require('./routes/linkRoutes'));

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`.dim.bold);
});
