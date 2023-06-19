const mongoose = require('mongoose');
// require('mongoose-type-url');

const linkSchema = mongoose.Schema({
  link: {
    type: String,
    required: [true, 'Please add a Link'],
  },
});
module.exports = mongoose.model('Link', linkSchema);
