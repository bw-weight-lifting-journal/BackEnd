
exports.up = function(knex) {
    return knex.schema
        .createTable('users', table => {
            table.increments();
            table.string('name')
                .notNullable();
            table.string('password')
                .notNullable();
            table.timestamps();
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users');
};
