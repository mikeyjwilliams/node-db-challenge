const express = require('express');
const router = express.Router();
const projectModel = require('./projects-model');

router.post('/', async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'name of project is required' });
  }
  const projectInput = {
    name: name,
    description: req.body.description || null,
    completed: req.body.completed || 0,
  };
  try {
    const project = await projectModel.addProject(projectInput);
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
