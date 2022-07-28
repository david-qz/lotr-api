const { Router } = require('express');
const Character = require('../models/Character');

const router = new Router();

router
    .get('/', async (req, res) => {
        const characters = await Character.getAll();
        const ids = characters.map(x => ({ id: x.id, name: x.name }));
        res.json(ids);
    });

module.exports = router;
