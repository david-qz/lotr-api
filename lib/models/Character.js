const pool = require('../utils/pool');

class Character {
    id;
    name;
    age;
    birthYear;
    deathYear;
    race;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.age = row.age;
        this.birthYear = row.birth_year;
        this.deathYear = row.death_year;
        this.race = row.race;
    }

    static async getAll() {
        const { rows } = await pool.query('select * from characters;');
        return rows.map(row => new Character(row));
    }
}

module.exports = Character;
