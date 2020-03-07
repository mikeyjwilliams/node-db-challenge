const express = require('express');
const router = express.Router();
const resourceModel = require('./resources-model');

router.post('/', async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'name is required' });
  }
  const resource = {
    name: name,
    description: req.body.description || null,
  };
  try {
    const result = await resourceModel.addResource(resource);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const resources = await resourceModel.getResources();
    if (resources.length > 0) {
      res.status(200).json(resources);
    } else {
      res.status(400).json({ message: 'no resources to show' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
