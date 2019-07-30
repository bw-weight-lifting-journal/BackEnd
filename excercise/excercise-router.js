const router = require('express').Router();
const db = require('./excercise-helpers');
const restricted = require('../middleware/restricted-route');

router.get('/arms', restricted, (req, res) => {
    db.findExercise()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

router.get('/arms/:id', restricted, (req, res) => {
    db.findExerciseById(req.params.id)
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

module.exports = router;

