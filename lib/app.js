const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// App routes
app.use('/characters', require('./controllers/characters'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
