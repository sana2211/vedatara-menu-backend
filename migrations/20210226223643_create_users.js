
exports.up = function(knex) {
    return knex.schema.createTable('users', (table)=>
    {
    table.increments();
    table.string('fullname').notNullable();
    table.string('jobTitle').notNullable();
    table.string('address').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
