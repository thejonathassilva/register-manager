const companyService = require('../services/company');

async function createCompany(req, res) {
    try {
        const company = await companyService.createCompany(req.body);
        res.status(201).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateCompany(req, res) {
    try {
        const company = await companyService.updateCompany(req.params.id, req.body);
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findCompanyById(req, res) {
    try {
        const company = await companyService.findCompanyById(req.params.id);
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findCompanyByCNPJ(req, res) {
    try {
        const company = await companyService.findCompanyByCNPJ(req.params.cnpj);
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findCompaniesByActivity(req, res) {
    try {
        const companies = await companyService.findCompaniesByActivity(req.params.activity);
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findCompaniesByPostalCode(req, res) {
    try {
        const companies = await companyService.findCompaniesByPostalCode(req.params.postalCode);
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findCompaniesByActiveStatus(req, res) {
    try {
        const companies = await companyService.findCompaniesByActiveStatus(req.params.isActive);
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function softDeleteCompany(req, res) {
    try {
        const company = await companyService.softDeleteCompany(req.params.id);
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function hardDeleteCompany(req, res) {
    try {
        await companyService.hardDeleteCompany(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createCompany,
    updateCompany,
    findCompanyById,
    findCompanyByCNPJ,
    findCompaniesByActivity,
    findCompaniesByPostalCode,
    findCompaniesByActiveStatus,
    softDeleteCompany,
    hardDeleteCompany
};
