const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemDetailsSchema = new Schema({
      icon: { type: String, required: true },
      icon_large: { type: String, required: true },
      id: { type: Number, required: true },
      type: { type: String, required: true },
      typeIcon: { type: String, required: true },
      name: { type: String, required: true },
      description: { type: String, required: true },
      current: {
          "current_trend": { type: String, required: true },
          "current_price": { type: String, required: true },
      },
      today: {
        "today_trend": { type: String, required: true },
        "today_price": { type: String, required: true },
      },
      members: { type: Boolean, required: true },
      day30: {
          "day30_trend": { type: String, required: true },
          "day30_change": { type: String, required: true },
        },
      day90: {
          "day90_trend": { type: String, required: true },
          "day90_change": { type: String, required: true },
        },
      day180: {
          "day180_trend": { type: String, required: true },
          "day180_change": { type: String, required: true },
        }
});

const ItemDetails = mongoose.model('ItemDetails', itemDetailsSchema);

module.exports = ItemDetails;