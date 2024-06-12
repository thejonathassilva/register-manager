const companyRepository = require('../repositories/company');

async function createCompany(companyData) {
    return await companyRepository.createCompany(companyData);
}

async function updateCompany(id, companyData) {
    return await companyRepository.updateCompany(id, companyData);
}

async function findCompanyById(id) {
    return await companyRepository.findCompanyById(id);
}

async function findCompanyByCNPJ(cnpj) {
    return await companyRepository.findCompanyByCNPJ(cnpj);
}

async function findCompaniesByActivity(activity) {
    return await companyRepository.findCompaniesByActivity(activity);
}

async function findCompaniesByPostalCode(postalCode) {
    return await companyRepository.findCompaniesByPostalCode(postalCode);
}

async function findCompaniesByActiveStatus(isActive) {
    return await companyRepository.findCompaniesByActiveStatus(isActive);
}

async function softDeleteCompany(id) {
    return await companyRepository.softDeleteCompany(id);
}

async function hardDeleteCompany(id) {
    return await companyRepository.hardDeleteCompany(id);
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
