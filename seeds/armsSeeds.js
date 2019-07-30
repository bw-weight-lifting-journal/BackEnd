
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('arms').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('arms').insert([
                { excerciseName: 'Hammer Curl' },
                { excerciseName: 'Dumbell Bicep Curl' },
                { excerciseName: 'Barbell Bicep Curl' },
                { excerciseName: 'Tricep Dip' },
                { excerciseName: 'Rope Pull down' },
                { excerciseName: 'Overhead pull' },

            ]);
        });
};
    