const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-routes');
// const usersRouter = require('./users/users-router');

const server = express();

server.use('/api/auth', authRouter);
// server.use('/api/users', usersRouter);

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send("It's alive!");
});

module.exports = server;