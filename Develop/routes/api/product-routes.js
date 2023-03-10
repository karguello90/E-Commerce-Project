const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// gets all products
router.get('/', (req, res) => {
  // finds all products
  Product.findAll({
    include: [Category, {
      model: Tag, through: ProductTag
    }]
  }) .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});

// gets one product
router.get('/:id', (req, res) => {
  // finds a single product by its `id`
  Product.findOne({
    where: {
      id: req.params.id
    },
    include: [Category, {
      model: Tag, through: ProductTag
    }]
  }) .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});

// created new product using example below
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // created pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just responds
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// updated product
router.put('/:id', (req, res) => {
  // updates product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // finds all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // gets list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // creates filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figures out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // runs both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.logged(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // deletes one product by its `id` value
  Product.destroy({
    where: {
      id: req.params.id
    }
  }) .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});

module.exports = router;
