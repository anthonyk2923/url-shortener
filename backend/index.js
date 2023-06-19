console.clear();
const express = require('express');
const cors = require('cors');
const Link = require('./models/linkModel');
require('dotenv').config();
require('colors');
const connectDB = require('./config/db');
const asyncHandler = require('express-async-handler');
const url = require('url');
const querystring = require('querystring');

connectDB.connectDb();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/links', require('./routes/linkRoutes'));
app.get('/favicon.ico', (req, res) =>
  res.sendFile(__dirname + '/public/favicon.ico')
);

app.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const currentLink = await Link.findById(req.originalUrl.slice(1));
    res.redirect(currentLink.link);
  })
);
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`.dim.bold);
});
