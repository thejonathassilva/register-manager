const express = require('express');
const router = express.Router();

const condominiumRoutes = require('./condominium');

router.use('/condominium', condominiumRoutes);

module.exports = router;
