const Link = require('../models/linkModel');
const asyncHandler = require('express-async-handler');

//@GET
//all links
const getLinks = asyncHandler(async (req, res) => {
  res.json(await Link.find());
});
//@POST
//1 link
const postLink = asyncHandler(async (req, res) => {
  if (!req.body.link) {
    res
      .status(400)
      .json({ message: 'Make sure you have included a link to shorten.' });
  } else {
    res.json(await Link.create({ link: req.body.link }));
  }
});

module.exports = {
  getLinks,
  postLink,
};
