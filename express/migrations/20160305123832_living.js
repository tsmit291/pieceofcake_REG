exports.up = function(knex, Promise) {
  return knex.schema.createTable('living', function(table){
    table.increments();
    table.string('item');
    table.string('category');
    table.integer('quantity');
    table.string('price');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('living');
};
