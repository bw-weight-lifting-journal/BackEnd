/* eslint-disable arrow-parens */
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

const db = require('../users/users-helpers');

router.post('/register', (req, res) => {

    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;

    db.add(user)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            res.status(500).json({ Error: 'Internal Server Error' });
        });
});

router.post('/login', (req, res) => {
    let { name, password } = req.body;

    db.findBy(name)
        .then(user => {
            console.log(user);
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ Message: `Welcome ${user.name}!`, Token: token });
            } else {
                res.status(401).json({ Message: 'Invalid credentials' });
            }
        })
        .catch(error => {
            res.status(500).json({ Error: 'Internal Server Error' });
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    };

    const options = {
        expiresIn: '1d',
    };
    return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;