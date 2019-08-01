const bcrypt = require('bcryptjs');

module.exports = (req, res, next) => {
    if (req.body) {
        if (req.body.userName && req.body.password) {
            let user = req.body;
            const hash = bcrypt.hashSync(user.password, 14);
            user.password = hash;
            req.user = user;
            next();
        } else {
            res.status(404).json({ Error: 'You must provide firstName, lastName, email, userName and password to register' });
        }
    } else {
        res.status(404).json({ Error: 'No Details Passed' });
    }
};