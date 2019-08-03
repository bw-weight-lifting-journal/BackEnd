
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('legs').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('legs').insert([
                { exerciseName: 'DeadLift' },
                { exerciseName: 'Leg Press' },
                { exerciseName: 'Squat' },

            ]);
        });
};