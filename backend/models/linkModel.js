const mongoose = require('mongoose');
require('mongoose-type-url');

const linkSchema = mongoose.Schema(
  {
    link: {
      type: mongoose.SchemaTypes.Url,
      required: [true, 'Please add a Link'],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Link', linkSchema);
