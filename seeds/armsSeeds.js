
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('arms').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('arms').insert([
                { exerciseName: 'Hammer Curl' },
                { exerciseName: 'Dumbell Bicep Curl' },
                { exerciseName: 'Barbell Bicep Curl' },
                { exerciseName: 'Tricep Dip' },
                { exerciseName: 'Rope Pull down' },
                { exerciseName: 'Overhead pull' },

            ]);
        });
};
    