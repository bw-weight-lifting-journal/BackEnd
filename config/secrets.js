const base64 = require('base-64');
const secret = require('./config');

module.exports = {
    jwtSecret: base64.encode(process.env.JWT_SECRET) || base64.encode(secret),
};