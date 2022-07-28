const { Router } = require('express');
const Character = require('../models/Character');

const router = new Router();

router
    .get('/', async (req, res) => {
        const characters = await Character.getAll();
        const ids = characters.map(x => ({ id: x.id, name: x.name }));
        res.json(ids);
    })
    .get('/:id', async (req, res, next) => {
        const id = req.params.id;

        try {
            const character = await Character.getById(id);
            res.json(character);
        } catch (error) {
            error.status = 404;
            next(error);
        }
    });

module.exports = router;
