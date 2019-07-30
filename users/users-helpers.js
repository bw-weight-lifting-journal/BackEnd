const db = require('../data/configDb');

function find() {
    return db('users')
        .select('id', 'userName', 'email');
}

function findBy(filter) {
    return db('users')
        .where('userName', filter)
        .first();
}

function findById(id) {
    return db('users')
        .select('id','userName')
        .where({ 'id': id })
        .first();
}
function add(user) {
    return db('users')
        .returning(['id', 'userName'])
        .insert(user);
}

module.exports = {
    add,
    find,
    findBy,
    findById,
};
