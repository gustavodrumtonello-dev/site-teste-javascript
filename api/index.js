const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('../api/routes/usuarios_route');
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', usuariosRoutes);

module.exports = app;