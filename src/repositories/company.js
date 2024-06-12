const Company = require('../models/company');

async function createCompany(companyData) {
    const company = new Company(companyData);
    return await company.save();
}

async function updateCompany(id, companyData) {
    return await Company.findByIdAndUpdate(id, companyData, { new: true });
}

async function findCompanyById(id) {
    return await Company.findById(id);
}

async function findCompanyByCNPJ(cnpj) {
    return await Company.findOne({ CNPJ: cnpj });
}

async function findCompaniesByActivity(activity) {
    return await Company.find({
        $or: [
            { 'activity.atividade_principal.text': { $regex: activity, $options: 'i' } },
            { 'activity.atividades_secundarias.text': { $regex: activity, $options: 'i' } }
        ]
    });
}

async function findCompaniesByPostalCode(postalCode) {
    return await Company.find({ 'address.postalCode': postalCode });
}

async function findCompaniesByActiveStatus(isActive) {
    return await Company.find({ isActive });
}

async function softDeleteCompany(id) {
    const deletionDate = new Date();
    deletionDate.setMonth(deletionDate.getMonth() + 1);
    return await Company.findByIdAndUpdate(id, { isActive: false, deletionDate }, { new: true });
}

async function hardDeleteCompany(id) {
    return await Company.findByIdAndDelete(id);
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
