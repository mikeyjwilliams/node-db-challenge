const db = require('../data/config');

module.exports = {
  getById,
  addTask,
  getTasks,
};

function getById(id) {
  return db('tasks')
    .where({ id: id })
    .select()
    .first();
}

async function addTask(task) {
  const [id] = await db('tasks').insert(task);

  return getById(id);
}

function getTasks(project_id) {
  return db('tasks as t')
    .select(
      'p.name as project_name',
      'p.description as project_description',
      't.description as task_description',
      't.notes as task_notes',
      't.completed as task_completed'
    )
    .join('projects as p', 't.project_id', 'p.id')
    .where('t.project_id', project_id);
}
