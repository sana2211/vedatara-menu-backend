exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('restaurants').del()
      .then(function () {
        // Inserts seed entries
        return knex('restaurants').insert([
          {userId: 1, title: 'Breakfast',description: 'We serve breakfast all day', 
          calories: '100kl'},
          {userId: 1, title: 'Dinner',description: 'We serve vegan also ', 
          calories: '200kl'},
          {userId: 2, title: 'Desserts',description: 'Death by Chocolate', 
          calories: '300kl'},
         
        ]);
      });
  };
  