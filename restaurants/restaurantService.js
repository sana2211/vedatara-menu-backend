  const RestaurantService = {
    insertNewmenu(knex, newRestaurant){
        return knex
            .insert(newRestaurant)
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
    getAllrestaurants(knex, id){
        return knex 
            .select('*')  
            .from('restaurants')
    },
    deleterestaurant(knex, id){
        return knex 
            .delete('*')  
            .from('restaurants')
            .where('id', id)
    }
}

module.exports = RestaurantService;

