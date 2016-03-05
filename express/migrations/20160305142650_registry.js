exports.up = function(knex, Promise) {
  return knex.schema.createTable('registry', function(table){
    table.increments();
    table.string('item');
    table.string('category');
    table.integer('quantity');
    table.string('price');
    table.string('ranking');
    table.string('registry_type');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('registry');
};
