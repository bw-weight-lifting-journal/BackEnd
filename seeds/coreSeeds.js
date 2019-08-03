
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('core').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('core').insert([
                { exerciseName: 'Spider Crawl' },
                { exerciseName: 'Weighted Sit up' },
                { exerciseName: 'Leg Raises' },
            ]);
        });
};