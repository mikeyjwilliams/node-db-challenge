const db = require('../data/config');

module.exports = {
  getById,
  addTask,
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
