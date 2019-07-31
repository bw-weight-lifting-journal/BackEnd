const router = require('express').Router();
const db = require('./exercise-helpers');
const restricted = require('../middleware/restricted-route');

router.get('/:name', restricted, (req, res) => {
    db.findExercise(req.params.name)
        .then(exercises => {
            res.status(200).json(exercises);
        })
        .catch(err => {
            res.status(500).json({ Error: 'Internal Server Error' });
        });
});

router.get('/:name/:id', restricted, (req, res) => {
    db.findExerciseById(req.params.name, req.params.id)
        .then(exercise => {
            res.status(200).json(exercise);
        })
        .catch(err => {
            res.status(500).json({ Error: 'Internal Server Error' });
        });
    
});
router.post('/:name', restricted, (req, res) => {
    db.insertExercise(req.params.name, req.body)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(err => {
            res.status(500).json({ Error: 'Internal Server Error' });
        });
});

router.put('/:name/:id', restricted, (req, res) => {
    console.log(req.body);
    db.updateExercise(req.params.name, req.params.id, req.body)
        .then(exercise => {
            res.status(200).json(exercise);
        })
        .catch(err => {
            res.status(500).json({ Error: 'Internal Server Error' });
        });
});

router.delete('/:name/:id', restricted, (req, res) => {
    db.deleteExercise(req.params.name, req.params.id)
        .then(exercise => {
            res.status(204).json({Deleted: 'Exercise Deleted, Have a nice day'});
        })
        .catch(err => {
            res.status(500).json({ Error: 'Internal Server Error' });
        });
});
    


module.exports = router;

