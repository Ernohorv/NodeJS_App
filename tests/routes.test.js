const request = require('supertest');
const server = require('../server');

describe('Index endpoint', () => {
    it('should return 200', async () => {
        const res = await request(server).get('/')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({'message': 'Eeee'})
    })
});