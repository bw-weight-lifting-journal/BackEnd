
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('chest').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('chest').insert([
                { excerciseName: 'Bench Press' },
                { excerciseName: 'Dumbell Fly' },
                { excerciseName: 'Incline Flys' },
               
            ]);
        });
};