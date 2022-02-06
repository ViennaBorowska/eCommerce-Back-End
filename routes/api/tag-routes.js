const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//GET all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
    },
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//GET a tag by I.D.
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
    },
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//POST create a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//PUT update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((tagData) => {
      if (!tagData) {
        res.status(404).json({ message: 'No tag found matching this I.D!' });
        return;
      }
      res.json(tagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// DELETE a tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tagData) => {
      if (!tagData) {
        res.status(404).json({ message: 'No tag found matching this I.D!' });
        return;
      }
      res.json(tagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
