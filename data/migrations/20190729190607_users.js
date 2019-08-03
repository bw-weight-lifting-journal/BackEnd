
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
        })
        .createTable('arms', table => {
            table.increments();
            table.string('exerciseName')
                .notNullable();
                
        })
        .createTable('shoulders', table => {
            table.increments();
            table.string('exerciseName')
                .notNullable();
                
        })
        .createTable('chest', table => {
            table.increments();
            table.string('exerciseName')
                .notNullable();
                
        })
        .createTable('back', table => {
            table.increments();
            table.string('exerciseName')
                .notNullable();
                
        })
        .createTable('core', table => {
            table.increments();
            table.string('exerciseName')
                .notNullable();
                
        })
        .createTable('legs', table => {
            table.increments();
            table.string('exerciseName')
                .notNullable();
                
        });
       
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('legs')
        .dropTableIfExists('core')
        .dropTableIfExists('back')
        .dropTableIfExists('chest')
        .dropTableIfExists('shoulders')
        .dropTableIfExists('arms')
        .dropTableIfExists('users');
};

