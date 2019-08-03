
exports.up = function (knex) {
    return knex.schema
   .createTable('workout', table => {
       table.increments();
       table.integer('user_id')
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('users')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
       table.integer('arms_id')
           .unsigned()
           .references('id')
           .inTable('arms')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
       table.integer('shoulders_id')
           .unsigned()
           .references('id')
           .inTable('shoulders')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
       table.integer('chest_id')
           .unsigned()
           .references('id')
           .inTable('chest')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
       table.integer('back_id')
           .unsigned()
           .references('id')
           .inTable('back')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
       table.integer('core_id')
           .unsigned()
           .references('id')
           .inTable('core')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
       table.integer('legs_id')
           .unsigned()
           .references('id')
           .inTable('legs')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
       table.integer('sets')
           .unsigned();
       table.integer('weight')
           .unsigned();
       table.integer('reps')
           .unsigned();
       table.integer('difficulty')
           .unsigned();
       table.date('date');
   });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('workout');
};
