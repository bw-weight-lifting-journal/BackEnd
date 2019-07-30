
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('back').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('back').insert([
                { exerciseName: 'Lat Pull Down' },
                { exerciseName: '1 Armed Row' },
                { exerciseName: 'Seated Row' },
            ]);
        });
};