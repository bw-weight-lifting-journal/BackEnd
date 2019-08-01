const request = require('supertest');

const server = require('../server');

describe('auth-routes.js', () => {
    describe('register', () => {
        it('should return status code OK 201 from register route and json in body', async () => {
            
            const testUser = {
                "firstName": "cotton",
                "lastName": "eyed joe",
                "userName": "test4",
                "email": "test4",
                "password": "12345"
            };
    
           await request(server)
                .post('/api/auth/register')
                .send(testUser)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201)
                .expect(Array);
        });
    });
    describe('login', () => {
        it('Should return 200 status code and login returning name and auth token', async () => {
            const testLogin = {
                userName: 'test',
                password: '12345'
            };
            await request(server)
                .post('/api/auth/login')
                .send(testLogin)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect(Object);
            
        });
    });
});