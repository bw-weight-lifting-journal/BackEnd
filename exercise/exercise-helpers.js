const db = require('../data/configDb');

function findExercise() {
    return db('arms')
        .select('id', 'exerciseName');
}

function findExerciseById(id) {
    return db('arms')
        .select('id', 'exerciseName')
        .where({ 'id': id })
        .first();
}

module.exports = {
    findExercise,
    findExerciseById
};