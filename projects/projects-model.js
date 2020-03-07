const db = require('../data/config');

module.exports = {
  getProjects,
  addProject,
  getById,
};

function getProjects() {
  return db('projects').select();
}

function getById(id) {
  return db('projects')
    .where({ id: id })
    .select()
    .first();
}

async function addProject(project) {
  const [id] = await db('projects').insert(project);

  return getById(id);
}
