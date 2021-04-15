  const restaurantService = {
   
    insertNewmenu(knex, newUser){
        return knex
            .insert(newUser)
            .into('restaurants')
            .returning('*')
            .then(rows=>{
                return rows[0]
            })
    },
    
    getrestaurants(knex, id){
        return knex 
            .select('*')  
            .from('restaurants')
            .where('user_id', id)
    },

    deleterestaurant(knex, id){
        return knex 
            .delete('*')  
            .from('restaurants')
            .where('id', id)
    }
}

module.exports = restaurantService;

