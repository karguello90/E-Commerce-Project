const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // finds all categories
  Category.findAll({
    include: [Product]
  }) .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});

router.get('/:id', (req, res) => {
  // finds one category by its `id` value
  Category.findOne({
    include: [Product], 
    where: {
      id: req.params.id
    }
  }) .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});


router.post('/', (req, res) => {
  // creates a new category
  Category.create(req.body) .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});

router.put('/:id', (req, res) => {
  // updates a category by its `id` value
  Category.update(req.body,{where:{ id: req.params.id }}) .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});

router.delete('/:id', (req, res) => {
  // deletes a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }) .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});

module.exports = router;
