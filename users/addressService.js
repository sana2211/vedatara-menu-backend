  const AddressService = {
   
    insertNewAddress(knex, newUser){
        return knex
            .insert(newUser)
            .into('addresses')
            .returning('*')
            .then(rows=>{
                return rows[0]
            })
    },
    getAddress(knex, id){
        return knex 
            .from('addresses')
            .select('*')
            .where('user_id',id)
            .first()
    }
}

module.exports = AddressService;

