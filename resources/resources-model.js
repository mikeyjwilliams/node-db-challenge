const db = require('../data/config');

module.exports = {
  getById,
  addResource,
};

function getById(id) {
  return db('resources')
    .where({ id: id })
    .select();
}

async function addResource(resource) {
  const [id] = await db('resources').insert(resource);

  return getById(id);
}
