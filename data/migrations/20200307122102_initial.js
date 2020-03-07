exports.up = async function(knex) {
  await knex.schema.createTable('projects', tbl => {
    tbl.increments('id');
    tbl.string('name').notNullable();
    tbl.text('description');
    tbl
      .boolean('completed')
      .notNullable()
      .defaultTo(0);
  });

  await knex.schema.createTable('resources', tbl => {
    tbl.increments('id');
    tbl
      .string('name')
      .notNullable()
      .unique();
    tbl.text('description');
  });

  await knex.schema.createTable('tasks', tbl => {
    tbl.increments('id');
    tbl.text('description').notNullable();
    tbl.text('notes');
    tbl
      .boolean('completed')
      .notNullable()
      .defaultTo(0);
  });

  await knex.schema.createTable('projects_resources', tbl => {
    tbl
      .integer('project_id')
      .references('id')
      .inTable('projects');
    tbl
      .integer('resource_id')
      .references('id')
      .inTable('resources');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('projects_resources');
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('resources');
  await knex.schema.dropTableIfExists('projects');
};
