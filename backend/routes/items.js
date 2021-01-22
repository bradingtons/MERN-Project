const router = require('express').Router();
let Item = require('../models/items.model');

router.route('/').get((req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req, res) => {
  const item = req.body.item
  const itemId = req.body.itemId

  const newItem = new Item({item, itemId});

  newItem.save()
    .then(() => res.json('Item added for tracking!'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;