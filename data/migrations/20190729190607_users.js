
exports.up = function(knex) {
    return knex.schema
        .createTable('users', table => {
            table.increments();
            table.string('firstName')
                .notNullable();
            table.string('lastName')
                .notNullable();
            table.string('userName')
                .unique()
                .notNullable();
            table.string('email')
                .unique()
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
