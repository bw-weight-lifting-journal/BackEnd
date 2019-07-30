const db = require('../data/configDb');

function find() {
    return db('users')
        .select('id', 'name');
}

function findBy(filter) {
    return db('users')
        .where('name', filter)
        .first();
}

function findById(id) {
    return db('users')
        .select('id','name')
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
