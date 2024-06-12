const condominiumRepository = require('../repositories/condominium');

async function createCondominium(condominiumData) {
    try {
        return await condominiumRepository.createCondominium(condominiumData);
    } catch (error) {
        throw error;
    }
}

async function updateCondominium(id, updateData) {
    try {
        return await condominiumRepository.updateCondominium(id, updateData);
    } catch (error) {
        throw error;
    }
}

async function findCondominiumById(id) {
    try {
        return await condominiumRepository.findCondominiumById(id);
    } catch (error) {
        throw error;
    }
}

async function findCondominiumByAddressLocality(locality) {
    try {
        return await condominiumRepository.findCondominiumByAddressLocality(locality);
    } catch (error) {
        throw error;
    }
}

async function findCondominiumByPostalCode(postalCode) {
    try {
        return await condominiumRepository.findCondominiumByPostalCode(postalCode);
    } catch (error) {
        throw error;
    }
}

async function softDeleteCondominium(id) {
    try {
        return await condominiumRepository.softDeleteCondominium(id);
    } catch (error) {
        throw error;
    }
}

async function hardDeleteCondominium(id) {
    try {
        return await condominiumRepository.hardDeleteCondominium(id);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createCondominium,
    updateCondominium,
    findCondominiumById,
    findCondominiumByAddressLocality,
    findCondominiumByPostalCode,
    softDeleteCondominium,
    hardDeleteCondominium
};
