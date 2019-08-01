const request = require('supertest');

const authRouter = require('./auth-routes');

describe('auth-routes.js', () => {
    describe('register', () => {
        it('should return status code OK 201 from register route and json in body', async () => {
            
            const testUser = {
                "firstName": "cotton",
                "lastName": "eyed joe",
                "userName": "test",
                "email": "test",
                "password": "12345"
            };
    
            const response = await request(authRouter)
                .post('/register')
                .send(testUser)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201);
            console.log(response);
        });
    });
});