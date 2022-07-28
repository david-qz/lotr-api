-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
drop table if exists characters;

create table characters (
    id bigint generated always as identity,
    name varchar(255) not null,
    age varchar(255) not null,
    birth varchar(255) not null,
    death varchar(255) not null,
    race varchar(255) not null
);

-- Note to self: ring was destroyed March 25, 3019
insert into characters (name, age, birth, death, race) values
    (
        'Frodo Baggins',
        '50',
        'September 22, TA 2968 / SR 1368',
        'Unknown - Sailed to Undying Lands in SR 1421',
        'Hobbits'
    ),
    (
        'Samwise Gamgee',
        '38',
        'April 6, TA 2980 / SR 1380',
        'Unknown - Sailed to Undying Lands in SR 1482',
        'Hobbits'
    ),
    (
        'Meriadoc Brandy',
        '37',
        'TA 2982 / SR 1382',
        'FA 63 / SR 1484',
        'Hobbits'
    ),
    (
        'Peregrin Took',
        '29',
        'Spring TA 2990 / SR 1390',
        'FA 63 / SR 1484',
        'Hobbits'
    ),
    (
        'Aragorn II Elessar',
        '88',
        'March 1, TA 2931',
        'March 1, FA 120',
        'Men'
    ),
    (
        'Gandalf',
        '>3019',
        'Before the Shaping or Arda',
        'Immortal',
        'Maia of Manwë (One of the Istari)'
    ),
    (
        'Gimli',
        '140',
        'TA 2879',
        'Unknown - Sailed to the Undying Lands in FA 120',
        'Dwarves'
    ),
    (
        'Legolas',
        'Unknown',
        'Unknown',
        'Unknown - Sailed to the Undying Lands in FA 120',
        'Elves'
    ),
    (
        'Boromir',
        '41',
        'TA 2978',
        'February 26, TA 3019',
        'Men'
    );
