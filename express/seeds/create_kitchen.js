exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('kitchen').del(),

    // Inserts seed entries
    knex('kitchen').insert({
      item: 'baking sheets',
      category: 'kitchen',
      quantity: '2',
      price range: '$'
      }),
    knex('kitchen').insert({
      item: 'blender',
      category: 'kitchen',
      quantity: '1',
      price range: '$$$'
      }),
    knex('kitchen').insert({
      item: 'coffee maker',
      category: 'kitchen',
      quantity: '1',
      price range: '$$'
      }),
    knex('kitchen').insert({
      item: 'cutting boards',
      category: 'kitchen',
      quantity: '2',
      price range: '$'
      }),
    knex('kitchen').insert({
      item: 'food processor',
      category: 'kitchen',
      quantity: '1',
      price range: '$$'
      }),
    knex('kitchen').insert({
      item: 'knife set',
      category: 'kitchen',
      quantity: '1',
      price range: '$$$'
      }),
    knex('kitchen').insert({
      item: 'oven mitts',
      category: 'kitchen',
      quantity: '2',
      price range: '$'
      }),
    knex('kitchen').insert({
      item: 'round cake pans',
      category: 'kitchen',
      quantity: '2',
      price range: '$$'
      }),
    knex('kitchen').insert({
      item: 'round pie pan',
      category: 'kitchen',
      quantity: '1',
      price range: '$$'
      }),
    knex('kitchen').insert({
      item: 'multipurpose pots',
      category: 'kitchen',
      quantity: '2',
      price range: '$$'
      }),
    knex('kitchen').insert({
      item: 'sauce pan',
      category: 'kitchen',
      quantity: '1',
      price range: '$$'
      }),
    knex('kitchen').insert({
      item: 'skillet',
      category: 'kitchen',
      quantity: '1',
      price range: '$$'
      }),
    knex('kitchen').insert({
      item: 'measuring cups',
      category: 'kitchen',
      quantity: '1',
      price range: '$'
      }),
    knex('kitchen').insert({
      item: 'measuring spoons',
      category: 'kitchen',
      quantity: '1',
      price range: '$'
      }),
    knex('kitchen').insert({
      item: 'measuring bowls',
      category: 'kitchen',
      quantity: '1',
      price range: '$$'
      }),
    knex('kitchen').insert({
      item: 'standing mixer',
      category: 'kitchen',
      quantity: '1',
      price range: '$$$'
      }),
    knex('kitchen').insert({
      item: 'toaster',
      category: 'kitchen',
      quantity: '1',
      price range: '$$'
      }),
    knex('kitchen').insert({
      item: 'wooden spoons',
      category: 'kitchen',
      quantity: '2',
      price range: '$'
      }),
    knex('kitchen').insert({
      item: 'muffin tins',
      category: 'kitchen',
      quantity: '2',
      price range: '$$'
      })
  );
};
