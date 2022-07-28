const pool = require('../utils/pool');

class Character {
    id;
    name;
    age;
    birth;
    death;
    race;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.age = row.age;
        this.birth = row.birth;
        this.death = row.death;
        this.race = row.race;
    }

    static async getAll() {
        const { rows } = await pool.query('select * from characters;');
        return rows.map(row => new Character(row));
    }

    static async getById(id) {
        const { rows } = await pool.query('select * from characters where id = $1', [id]);
        if (!rows[0]) throw new Error(`no character with id=${id}`);

        return new Character(rows[0]);
    }
}

module.exports = Character;
