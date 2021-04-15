
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {restaurantName: 'Restaurant 1', email: 'jondoe1@email.com', 
        password: 'password', jobTitle: "Manager", address: 'Address1'},
        {restaurantName: 'Restaurant2', email: 'jondoe2@email.com', 
        password: 'password', jobTitle: "Manager", address: 'Address2'},
        {restaurantName: 'Restaurant 3', email: 'jondoe3@email.com', 
        password: 'password', jobTitle: "Manager", address: 'Address3'},
       
      ]);
    });
};
