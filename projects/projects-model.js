const db = require('../data/config');

module.exports = {
  addProject,
  getById,
};

function getById(id) {
  return db('projects')
    .where({ id: id })
    .select();
}

async function addProject(project) {
  const [id] = await db('projects').insert(project);

  return getById(id);
}
