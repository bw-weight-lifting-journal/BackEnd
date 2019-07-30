
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('core').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('core').insert([
                { excerciseName: 'Spider Crawl' },
                { excerciseName: 'Weighted Sit up' },
                { excerciseName: 'Leg Raises' },
            ]);
        });
};