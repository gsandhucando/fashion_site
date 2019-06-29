let router = require("express").Router();
let itemModel = require("../models/item");

router.route("/items").get((req, res) => {
  // console.log(req.query, 'query*******')
  let itemQueries = req.query.category
    .split(",")
    .map(category => ({ category: { $eq: category } }));
  // console.log(itemQueries)
  itemModel
    .find({ $or: itemQueries })
    .then(items => {
      // console.log(items)
      res.send(items);
    })
    .catch(err => {
      console.log(err);
      res.status(442).send({ message: err.message });
    });
});

module.exports = router;
