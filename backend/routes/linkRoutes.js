const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

router.route('/').get(linkController.getLinks).post(linkController.postLink);

module.exports = router;
