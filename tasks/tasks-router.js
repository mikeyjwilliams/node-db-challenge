const express = require('express');
const router = express.Router({ mergeParams: true });
const taskModel = require('./tasks-model');

router.post('/', async (req, res, next) => {
  const project_id = req.params.id;
  const { description } = req.body;

  if (!description) {
    return res
      .status(400)
      .json({ message: 'description for task is required.' });
  }
  const taskInput = {
    description: description,
    notes: req.body.notes || null,
    completed: req.body.completed || 0,
    project_id: project_id,
  };
  try {
    const task = await taskModel.addTask(taskInput);
    res.status(201).json(task);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  const { id } = req.params;
  try {
    const tasks = await taskModel.getTasks(id);
    if (tasks.length > 0) {
      res.status(200).json(tasks);
    } else {
      res.status(400).json({ message: 'project ID not found' });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
