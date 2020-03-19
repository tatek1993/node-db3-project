const db = require('../data/db-config');

module.exports = { 
    find,
    findById,
    findSteps,
    add,
    update, 
    remove
};

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes")
        .where({ id })
        .first();
}

function findSteps(id) {
    return db("steps")
        .where("steps.scheme_id", "=", id)
        .orderBy("steps.step_number");
}

function add(scheme) {
    return db("schemes")
    .insert(scheme)
        .then(id => {
            return findById(id[0])
        });
} 

function update(changes, id) {
    return db("schemes")
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id);
        });
}

function remove(id) {
    const removed = findById(id)
    return db("schemes")
        .where("schemes.id", id)
        .del();
}