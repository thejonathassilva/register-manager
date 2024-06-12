const express = require('express');
const router = express.Router();

const condominiumRoutes = require('./condominium');
const clientRoutes = require('./client');
const companyRoutes = require('./company');

router.use('/condominium', condominiumRoutes);
router.use('/client', clientRoutes);
router.use('/company', companyRoutes);

module.exports = router;
