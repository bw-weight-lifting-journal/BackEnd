const router = require('express').Router();
const db = require('./users-helpers');
const restricted = require('../middleware/restricted-route');


router.get('/', restricted, (req, res) => {
    db.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
    db.findById(req.params.id)
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

module.exports = router;