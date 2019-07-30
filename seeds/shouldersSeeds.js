
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('shoulders').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('shoulders').insert([
                { excerciseName: 'Side Raises' },
                { excerciseName: 'Front Raises' },
                { excerciseName: 'Shoulder Press' },
            ]);
        });
};