const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    DbConnect: process.env.DB_CONN,
    secret: process.env.SECRET,
};