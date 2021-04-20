
exports.up = function(knex) {
    return knex.schema.createTable('addresses', (table)=>
    {
    table.increments();
    table.integer("user_id").notNullable();
    table.string('RestaurantName').notNullable();
    table.string('StreetAddress').notNullable();
    table.string('PhoneNo').notNullable();
    table.string('City').notNullable();
    table.string('Coutry').notNullable();
    table.string('Timings').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.foreign("user_id").references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('addresses')
};

