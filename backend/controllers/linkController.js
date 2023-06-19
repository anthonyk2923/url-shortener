const Link = require('../models/linkModel');

//@GET
//all links
async function getLinks(req, res) {
  res.json(await Link.find());
}
//@POST
//1 link
async function postLink(req, res) {
  if (!req.body.link) {
    res
      .status(400)
      .json({ message: 'Make sure you have included a link to shorten.' });
  } else {
    res.json(await Link.create({ link: req.body.link }));
  }
}

module.exports = {
  getLinks,
  postLink,
};
