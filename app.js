const cors = require('cors')
const express = require('express');
const itemRoutes = require('./routes/item.route');

const app = express();

app.use(cors());

app.use('/v1', itemRoutes)

module.exports = app;