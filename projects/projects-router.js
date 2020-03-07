const express = require('express');
const router = express.Router();

router.post('/', async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'name of project is required' });
  }
});

module.exports = router;
