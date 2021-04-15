  const UsersService = {
    getAllUsers(knex){
        return knex
        .select('*')
        .from('users')
    },
    insertNewUser(knex, newUser){
        return knex
            .insert(newUser)
            .into('users')
            .returning('*')
            .then(rows=>{
                return rows[0]
            })
    },
    getUserByUserId(knex, id){
        return knex 
            .from('users')
            .select('*')
            .where('id',id)
            .first()
    },
    getUserByUsername(knex, email){
        return knex 
            .select('id','email','password')
            .from('users')
            .where('email', email)
            .first()
    },
}

module.exports = UsersService;

