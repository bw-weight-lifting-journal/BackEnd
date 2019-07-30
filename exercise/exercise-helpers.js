const db = require('../data/configDb');

function findExercise() {
    return db('arms')
        .select('id', 'excerciseName');
}

function findExerciseById(id) {
    return db('arms')
        .select('id', 'name')
        .where({ 'id': id })
        .first();
}

module.exports = {
    findExercise,
    findExerciseById
};