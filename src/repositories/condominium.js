const Condominium = require('../models/condominium');

async function createCondominium(condominiumData) {
    try {
        const newCondominium = new Condominium(condominiumData);
        return await newCondominium.save();
    } catch (error) {
        throw error;
    }
}

async function updateCondominium(id, updateData) {
    try {
        return await Condominium.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
        throw error;
    }
}

async function findCondominiumById(id) {
    try {
        return await Condominium.findById(id);
    } catch (error) {
        throw error;
    }
}

async function findCondominiumByAddressLocality(locality) {
    try {
        return await Condominium.find({ 'address.locality': locality });
    } catch (error) {
        throw error;
    }
}

async function findCondominiumByPostalCode(postalCode) {
    try {
        return await Condominium.find({ 'address.postalCode': postalCode });
    } catch (error) {
        throw error;
    }
}

async function softDeleteCondominium(id) {
    try {
        return await Condominium.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true });
    } catch (error) {
        throw error;
    }
}

async function hardDeleteCondominium(id) {
    try {
        return await Condominium.findByIdAndDelete(id);
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
