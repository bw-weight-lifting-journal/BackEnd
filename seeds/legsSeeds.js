
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('legs').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('legs').insert([
                { excerciseName: 'DeadLift' },
                { excerciseName: 'Leg Press' },
                { excerciseName: 'Squat' },

            ]);
        });
};