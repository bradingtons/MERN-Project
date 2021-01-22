const router = require('express').Router();
let ItemDetails = require('../models/itemdetails.model');

// Create Route
router.route('/').get((req, res) => {
  ItemDetails.find()
    .then(itemsDetails => res.json(itemsDetails))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req, res) => {
  const icon = req.body.icon;
  const icon_large = req.body.icon_large;
  const id = Number(req.body.id);
  const type = req.body.type;
  const typeIcon = req.body.typeIcon
  const name = req.body.name
  const description = req.body.description
  const current_trend = req.body.current.trend
  const current_price = req.body.current.price
  const today_trend = req.body.today.trend
  const today_price = req.body.today.price
  const members = Boolean(req.body.members)
  const day30_trend = req.body.day30.trend
  const day30_change = req.body.day30.change
  const day90_trend = req.body.day90.trend
  const day90_change = req.body.day90.change
  const day180_trend = req.body.day180.trend
  const day180_change = req.body.day180.change

  const newItemDetails = new ItemDetails({
      icon,
      icon_large,
      id,
      type,
      typeIcon,
      name,
      description,
      current: {
        current_trend,
        current_price
      },
      today: {
        today_trend,
        today_price
      },
      members,
      day30: {
        day30_trend,
        day30_change
      },
      day90: {
        day90_trend,
        day90_change
      },
      day180: {
        day180_trend,
        day180_change
      }
    });

  newItemDetails.save()
    .then(() => res.json('Item Details added for tracking!'))
    .catch(err => res.status(400).json('Error:' + err));
});

// Update Route
router.route('/update/:id').post((req, res) => {
  ItemDetails.findById(req.params.id)
    .then(itemDetails => {
      itemDetails.icon = req.body.icon;
      itemDetails.icon_large = req.body.icon_large;
      itemDetails.id = Number(req.body.id);
      itemDetails.type = req.body.type;
      itemDetails.typeIcon = req.body.typeIcon
      itemDetails.name = req.body.name
      itemDetails.description = req.body.description
      itemDetails.current_trend = req.body.current.trend
      itemDetails.current_price = req.body.current.price
      itemDetails.today_trend = req.body.today.trend
      itemDetails.today_price = req.body.today.price
      itemDetails.members = Boolean(req.body.members)
      itemDetails.day30_trend = req.body.day30.trend
      itemDetails.day30_change = req.body.day30.change
      itemDetails.day90_trend = req.body.day90.trend
      itemDetails.day90_change = req.body.day90.change
      itemDetails.day180_trend = req.body.day180.trend
      itemDetails.day180_change = req.body.day180.change
    
      itemDetails.save()
        .then(() => res.json('Item Details updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Request Route
router.route('/:id').get((req, res) => {
  ItemDetails.findById(req.params.id)
    .then(itemDetails => res.json(itemDetails))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Route
router.route('/:id').delete((req, res) => {
  ItemDetails.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item Details deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;