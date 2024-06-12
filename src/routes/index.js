const express = require('express');
const router = express.Router();

const condominiumRoutes = require('./condominium');
const clientRoutes = require('./client');
const companyRoutes = require('./company');
const employeeRoutes = require('./employee.js');

router.use('/condominium', condominiumRoutes);
router.use('/client', clientRoutes);
router.use('/company', companyRoutes);
router.use('/employee', employeeRoutes);

module.exports = router;
