exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('living').del(),

    // Inserts seed entries
    knex('living').insert({
      item: 'salad bowl',
      category: 'living',
      quantity: '1',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'drinking glasses',
      category: 'living',
      quantity: '12',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'mugs',
      category: 'living',
      quantity: '8',
      price range: '$'
      }),
    knex('living').insert({
      item: 'serving platters',
      category: 'living',
      quantity: '2',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'serving bowls',
      category: 'living',
      quantity: '2',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'serving utensils',
      category: 'living',
      quantity: '2',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'silverware set',
      category: 'living',
      quantity: '12',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'steak knives',
      category: 'living',
      quantity: '12',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'decorative bowls',
      category: 'living',
      quantity: '12',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'throw blanket',
      category: 'living',
      quantity: '2',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'wine glasses',
      category: 'living',
      quantity: '6',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'stemless wine glasses',
      category: 'living',
      quantity: '6',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'everyday glasses',
      category: 'living',
      quantity: '12',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'pint glasses',
      category: 'living',
      quantity: '12',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'wine opener',
      category: 'living',
      quantity: '1',
      price range: '$'
      }),
    knex('living').insert({
      item: 'grilling tools',
      category: 'living',
      quantity: '1',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'chip-and-dip tray',
      category: 'living',
      quantity: '1',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'rolling cooler',
      category: 'living',
      quantity: '1',
      price range: '$$'
      }),
    knex('living').insert({
      item: 'coasters',
      category: 'living',
      quantity: '8',
      price range: '$$'
      }),
  );
};
