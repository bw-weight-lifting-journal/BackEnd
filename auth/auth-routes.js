/* eslint-disable arrow-parens */
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');
const hashPassword = require('../middleware/hashPassword');

const db = require('../users/users-helpers');

router.post('/register', hashPassword, (req, res) => {
    db.add(req.user)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            res.status(500).json({ Error: 'Internal Server Error' });
        });
});

router.post('/login', (req, res) => {
    let { userName, password } = req.body;
    db.findBy(userName)
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ Message: `Welcome ${user.userName}!`, Token: token });
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