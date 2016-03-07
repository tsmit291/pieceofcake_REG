exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('registryObjs').del(),

    // Inserts seed entries
    knex('registryObjs').insert({
      item: 'baking sheets',
      category: 'kitchen',
      quantity: '2',
      price: '$'
      }),
    knex('registryObjs').insert({
      item: 'blender',
      category: 'kitchen',
      quantity: '1',
      price: '$$$'
      }),
    knex('registryObjs').insert({
      item: 'coffee maker',
      category: 'kitchen',
      quantity: '1',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'cutting boards',
      category: 'kitchen',
      quantity: '2',
      price: '$'
      }),
    knex('registryObjs').insert({
      item: 'food processor',
      category: 'kitchen',
      quantity: '1',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'knife set',
      category: 'kitchen',
      quantity: '1',
      price: '$$$'
      }),
    knex('registryObjs').insert({
      item: 'oven mitts',
      category: 'kitchen',
      quantity: '2',
      price: '$'
      }),
    knex('registryObjs').insert({
      item: 'round cake pans',
      category: 'kitchen',
      quantity: '2',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'round pie pan',
      category: 'kitchen',
      quantity: '1',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'multipurpose pots',
      category: 'kitchen',
      quantity: '2',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'sauce pan',
      category: 'kitchen',
      quantity: '1',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'skillet',
      category: 'kitchen',
      quantity: '1',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'measuring cups',
      category: 'kitchen',
      quantity: '1',
      price: '$'
      }),
    knex('registryObjs').insert({
      item: 'measuring spoons',
      category: 'kitchen',
      quantity: '1',
      price: '$'
      }),
    knex('registryObjs').insert({
      item: 'measuring bowls',
      category: 'kitchen',
      quantity: '1',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'standing mixer',
      category: 'kitchen',
      quantity: '1',
      price: '$$$'
      }),
    knex('registryObjs').insert({
      item: 'toaster',
      category: 'kitchen',
      quantity: '1',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'wooden spoons',
      category: 'kitchen',
      quantity: '2',
      price: '$'
      }),
    knex('registryObjs').insert({
      item: 'muffin tins',
      category: 'kitchen',
      quantity: '2',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'salad bowl',
      category: 'living',
      quantity: '1',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'drinking glasses',
      category: 'living',
      quantity: '12',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'mugs',
      category: 'living',
      quantity: '8',
      price: '$'
      }),
    knex('registryObjs').insert({
      item: 'serving platters',
      category: 'living',
      quantity: '2',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'serving bowls',
      category: 'living',
      quantity: '2',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'serving utensils',
      category: 'living',
      quantity: '2',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'silverware set',
      category: 'living',
      quantity: '12',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'steak knives',
      category: 'living',
      quantity: '12',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'decorative bowls',
      category: 'living',
      quantity: '12',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'throw blanket',
      category: 'living',
      quantity: '2',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'wine glasses',
      category: 'living',
      quantity: '6',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'stemless wine glasses',
      category: 'living',
      quantity: '6',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'everyday glasses',
      category: 'living',
      quantity: '12',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'pint glasses',
      category: 'living',
      quantity: '12',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'wine opener',
      category: 'living',
      quantity: '1',
      price: '$'
      }),
    knex('registryObjs').insert({
      item: 'grilling tools',
      category: 'living',
      quantity: '1',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'chip-and-dip tray',
      category: 'living',
      quantity: '1',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'rolling cooler',
      category: 'living',
      quantity: '1',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'coasters',
      category: 'living',
      quantity: '8',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'grill',
      category: 'outdoor',
      quantity: '1',
      price: '$$$$'
      }),
    knex('registryObjs').insert({
      item: 'fire pit',
      category: 'outdoor',
      quantity: '1',
      price: '$$$'
      }),
    knex('registryObjs').insert({
      item: 'hammock',
      category: 'outdoor',
      quantity: '1',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'outdoor table and chairs',
      category: 'outdoor',
      quantity: '1',
      price: '$$$$'
      }),
    knex('registryObjs').insert({
      item: 'tiki torches',
      category: 'outdoor',
      quantity: '5',
      price: '$$'
      }),
    knex('registryObjs').insert({
      item: 'portable speakers',
      category: 'outdoor',
      quantity: '1',
      price: '$$$'
      }),
    knex('registryObjs').insert({
      item: 'corn hole boards',
      category: 'outdoor',
      quantity: '1',
      price: '$$'
      })
  )
};
