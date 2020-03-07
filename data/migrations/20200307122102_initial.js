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
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('resources');
  await knex.schema.dropTableIfExists('projects');
};
