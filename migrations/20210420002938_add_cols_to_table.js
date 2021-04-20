
exports.up = function(knex, Promise) {
    return knex.schema.table('restaurants', function(table) {
        table.string('price').notNullable();
        table.string('type').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('restaurants', function(table) {
        table.string('price').notNullable();
        table.string('type').notNullable();
    });
};
