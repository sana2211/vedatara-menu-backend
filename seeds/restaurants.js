exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('restaurants').del()
      .then(function () {
        // Inserts seed entries
        return knex('restaurants').insert([
          {user_id: 1, title: 'Breakfast',description: 'We serve breakfast all day', 
          calories: '100kl', price: 545.65, type: 'Type'},
          {user_id: 1, title: 'Dinner',description: 'We serve vegan also', 
          calories: '200kl', price: 545.65, type: 'Type'},
          {user_id: 2, title: 'Desserts',description: 'Death by Chocolate', 
          calories: '300kl', price: 545.65, type: 'Type'},
         
        ]);
      });
  };
  