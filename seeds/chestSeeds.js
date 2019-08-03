
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('chest').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('chest').insert([
                { exerciseName: 'Bench Press' },
                { exerciseName: 'Dumbell Fly' },
                { exerciseName: 'Incline Flys' },
               
            ]);
        });
};