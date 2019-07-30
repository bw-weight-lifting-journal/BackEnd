const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');


const authRouter = require('./auth/auth-routes');
const usersRouter = require('./users/users-router');
const excerciseRouter = require('./exercise/exercise-router');


server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/exercises', excerciseRouter);

server.get('/', (req, res) => {
    res.send("It's alive!");
});

module.exports = server;