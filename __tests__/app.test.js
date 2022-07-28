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

    test('/characters/:id should get all info on single character', async () => {
        const res = await request(app).get('/characters/1');
        const character = res.body;

        expect(character).toEqual({
            id: expect.any(String),
            name: expect.any(String),
            age: expect.any(String),
            birth: expect.any(String),
            death: expect.any(String),
            race: expect.any(String),
        });
    });

    afterAll(() => {
        pool.end();
    });
});
