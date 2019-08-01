// const request = require('supertest');
// const express = require('express');
// const exerciseRouter = require('./exercise-router');
// const router = express();

// describe('exerciserRouter', () => {
//     describe('get /workout', () => {
//         it('should return ok status with 200 and json object of workout', () => {
//             const expectedStatusCode = 200;
//             const response = request(exerciseRouter)
//                 .get('/workout')
//                 .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxNSwiaWF0IjoxNTY0NTIwNzY1LCJleHAiOjE1NjQ2MDcxNjV9.cFlFTts9g1qPewPXE41tG7RN9xZnz-t9ztMYIR8wYHA')
//                 .expect(response.status).toEqual(expectedStatusCode);
//         });
//     });
// });