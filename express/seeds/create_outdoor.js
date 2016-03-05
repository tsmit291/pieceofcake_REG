exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('outdoor').del(),

    // Inserts seed entries
    knex('outdoor').insert({
      item: 'grill',
      category: 'outdoor',
      quantity: '1',
      price: '$$$$'
      }),
    knex('outdoor').insert({
      item: 'fire pit',
      category: 'outdoor',
      quantity: '1',
      price: '$$$'
      }),
    knex('outdoor').insert({
      item: 'hammock',
      category: 'outdoor',
      quantity: '1',
      price: '$$'
      }),
    knex('outdoor').insert({
      item: 'outdoor table and chairs',
      category: 'outdoor',
      quantity: '1',
      price: '$$$$'
      }),
    knex('outdoor').insert({
      item: 'tiki torches',
      category: 'outdoor',
      quantity: '5',
      price: '$$'
      }),
    knex('outdoor').insert({
      item: 'portable speakers',
      category: 'outdoor',
      quantity: '1',
      price: '$$$'
      }),
    knex('outdoor').insert({
      item: 'corn hole boards',
      category: 'outdoor',
      quantity: '1',
      price: '$$'
      })
  )
};
