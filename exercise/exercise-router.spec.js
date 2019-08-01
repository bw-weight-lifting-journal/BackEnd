const request = require('supertest');

const server = require('../server');

describe('exercise-router', () => {
    describe('/get/arms', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            await request(server)
                .get('/api/exercises/arms')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200)
                .expect(Array);
        });
    });
    describe('/get/chest', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            await request(server)
                .get('/api/exercises/chest')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200)
                .expect(Array);
        });
    });
    describe('/get/back', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            await request(server)
                .get('/api/exercises/back')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200)
                .expect(Array);
        });
    });
    describe('/get/shoulders', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            await request(server)
                .get('/api/exercises/shoulders')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200)
                .expect(Array);
        });
    });
    describe('/get/core', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            await request(server)
                .get('/api/exercises/core')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200)
                .expect(Array);
        });
    });
    describe('/get/legs', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            await request(server)
                .get('/api/exercises/legs')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200)
                .expect(Array);
        });
    });
    describe('/get/arms/:id', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            await request(server)
                .get('/api/exercises/arms/1')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200)
                .expect(Object);
        });
    });
    describe('/get/chest/:id', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            await request(server)
                .get('/api/exercises/chest/1')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200)
                .expect(Object);
        });
    });
    describe('/get/back/:id', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            await request(server)
                .get('/api/exercises/back/1')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200)
                .expect(Object);
        });
    });
    describe('/get/shoulders/:id', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            await request(server)
                .get('/api/exercises/shoulders/1')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200)
                .expect(Object);
        });
    });
    describe('/get/core/:id', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            await request(server)
                .get('/api/exercises/core/1')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200)
                .expect(Object);
        });
    });
    describe('/get/legs/:id', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            await request(server)
                .get('/api/exercises/legs/1')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200)
                .expect(Object);
        });
    });
    describe('/post/arms/', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {
            const newExercise = {
                exerciseName: 'test exercise'
            };
            await request(server)
                .post('/api/exercises/arms')
                .send(newExercise)
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(201)
                .expect(Object);
        });
    });
    describe('/post/chest/', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {
            const newExercise = {
                exerciseName: 'test exercise'
            };

            await request(server)
                .post('/api/exercises/chest')
                .send(newExercise)
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(201)
                .expect(Object);
        });
    });
    describe('/post/back/', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            const newExercise = {
                exerciseName: 'test exercise'
            };

            await request(server)
                .post('/api/exercises/back')
                .send(newExercise)
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(201)
                .expect(Object);
        });
    });
    describe('/post/shoulders/', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {
            const newExercise = {
                exerciseName: 'test exercise'
            };

            await request(server)
                .post('/api/exercises/shoulders')
                .send(newExercise)
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(201)
                .expect(Object);
        });
    });
    describe('/post/core', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {
            const newExercise = {
                exerciseName: 'test exercise'
            };

            await request(server)
                .post('/api/exercises/core')
                .send(newExercise)
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(201)
                .expect(Object);
        });
    });
    describe('/post/legs', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {
            const newExercise = {
                exerciseName: 'test exercise'
            };
            await request(server)
                .post('/api/exercises/legs/')
                .send(newExercise)
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(201)
                .expect(Object);
        });
    });
    describe('/delete/arms/:id', () => {
        it('should return status code OK 204 from get name route and json in body', async () => {

            await request(server)
                .delete('/api/exercises/arms/1')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(204);
        });
    });
    describe('/delete/chest/:id', () => {
        it('should return status code OK 204 from get name route and json in body', async () => {

            await request(server)
                .delete('/api/exercises/chest/1')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(204);
        });
    });
    describe('/delete/back/:id', () => {
        it('should return status code OK 204 from get name route and json in body', async () => {

            await request(server)
                .delete('/api/exercises/back/1')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(204);
             });
    });
    describe('/delete/shoulders/:id', () => {
        it('should return status code OK 204 from get name route and json in body', async () => {

            await request(server)
                .delete('/api/exercises/shoulders/1')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(204);
            });
    });
    describe('/delete/core/:id', () => {
        it('should return status code OK 204 from get name route and json in body', async () => {

            await request(server)
                .delete('/api/exercises/core/1')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(204);
            });
    });
    describe('/delete/legs/:id', () => {
        it('should return status code OK 204 from get name route and json in body', async () => {

            await request(server)
                .delete('/api/exercises/legs/1')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(204);
            });
    });
    describe('/update/arms/:id', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            const updatedExercise = {
                exerciseName: 'testupdated exercise'
            };

            await request(server)
                
                .put('/api/exercises/arms/1')
                .send(updatedExercise)
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200);
        });
    });
    describe('/update/chest/:id', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            const updatedExercise = {
                exerciseName: 'testupdated exercise'
            };

            await request(server)
                .put('/api/exercises/chest/1')
                .send(updatedExercise)
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200);
        });
    });
    describe('/update/back/:id', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            const updatedExercise = {
                exerciseName: 'testupdated exercise'
            };

            await request(server)
                
                .put('/api/exercises/back/1')
                .send(updatedExercise)
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200);
        });
    });
    describe('/update/shoulders/:id', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            const updatedExercise = {
                exerciseName: 'testupdated exercise'
            };

            await request(server)
                
                .put('/api/exercises/shoulders/1')
                .send(updatedExercise)
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200);
        });
    });
    describe('/update/core/:id', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            const updatedExercise = {
                exerciseName: 'testupdated exercise'
            };

            await request(server)
                
                .put('/api/exercises/core/1')
                .send(updatedExercise)
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200);
        });
    });
    describe('/update/legs/:id', () => {
        it('should return status code OK 200 from get name route and json in body', async () => {

            const updatedExercise = {
                exerciseName: 'testupdated exercise'
            };

            await request(server)
               
                .put('/api/exercises/legs/1')
                .send(updatedExercise)
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTY0NjczMTQ4LCJleHAiOjE1NjQ3NTk1NDh9.841PbTldOk1G4dCLBg2UCJUj2PYXpPK21ddnkXNCtAA')
                .expect(200);
        });
    });


});