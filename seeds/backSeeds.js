
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('back').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('back').insert([
                { excerciseName: 'Lat Pull Down' },
                { excerciseName: '1 Armed Row' },
                { excerciseName: 'Seated Row' },
            ]);
        });
};