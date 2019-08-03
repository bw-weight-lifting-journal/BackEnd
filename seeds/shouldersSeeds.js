
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('shoulders').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('shoulders').insert([
                { exerciseName: 'Side Raises' },
                { exerciseName: 'Front Raises' },
                { exerciseName: 'Shoulder Press' },
            ]);
        });
};