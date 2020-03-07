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

module.exports = router;
