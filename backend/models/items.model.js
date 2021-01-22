const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 2
  },
  itemId: {
    type: Number,
    required: true,
    trim: true,
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;