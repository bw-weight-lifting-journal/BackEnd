const db = require('../data/configDb');

function findWorkout() {
    return db('workout');
}
function insertWorkout(newWorkout) {
    return db('workout')
        .returning(['id', 'user_id', 'sets', 'weight', 'reps', 'difficulty'])
        .insert(newWorkout);
}

function findExercise(name) {
    return db(name)
        .select('id', 'exerciseName');
}

function findExerciseById(name, id) {
    return db(name)
        .select('id', 'exerciseName')
        .where({ 'id': id })
        .first();
}

function insertExercise(name, newExercise) {
    return db(name)
        .returning(['id', 'exerciseName'])
        .insert(newExercise);
    
}

function updateExercise(name, id, updatedExercise, ) {
    return db(name)
        .where({ 'id': id })
        .update({ 'exerciseName': updatedExercise.exerciseName })
        .returning(['id', 'exerciseName']);
    
}

function deleteExercise(name, id) {
    return db(name)
        .where({ 'id': id })
        .del()
        .returning('id', 'name');
}

module.exports = {
    findExercise,
    findExerciseById,
    insertExercise,
    updateExercise,
    deleteExercise,
    findWorkout,
    insertWorkout
};