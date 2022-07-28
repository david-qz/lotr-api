const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('/characters router', () => {
    beforeEach(() => {
        return setup(pool);
    });

    test('/characters should list all characters', async () => {
        const res = await request(app).get('/characters');
        const characters = res.body;

        expect(characters.length).toEqual(9);

        for (const c of characters) {
            expect(c).toEqual({
                id: expect.any(String),
                name: expect.any(String)
            });
        }
    });

    afterAll(() => {
        pool.end();
    });
});
