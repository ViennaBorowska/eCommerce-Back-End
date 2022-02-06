const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// GET all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ['product_name'],
    },
  })
    .then((catData) => res.json(catData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET one category by its `id` value
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ['category_id'],
    },
  })
    .then((catData) => res.json(catData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((catData) => res.json(catData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((catData) => {
      if (!catData) {
        res.status(404).json({ message: 'No category found with that I.D!' });
        return;
      }
      res.json(catData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((catData) => {
      if (!catData) {
        res.status(404).json({ message: 'No category found with this I.D!' });
        return;
      }
      res.json(catData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
