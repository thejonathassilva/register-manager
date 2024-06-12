'use-strict'

const clientRepository = require('../repositories/client');

async function createClient(clientData) {
    return await clientRepository.createClient(clientData);
}

async function updateClient(id, clientData) {
    return await clientRepository.updateClient(id, clientData);
}

async function findClientById(id) {
    return await clientRepository.findClientById(id);
}

async function findClientsByAddressLocality(locality) {
    return await clientRepository.findClientsByAddressLocality(locality);
}

async function findClientsByPostalCode(postalCode) {
    return await clientRepository.findClientsByPostalCode(postalCode);
}

async function softDeleteClient(id) {
    return await clientRepository.softDeleteClient(id);
}

async function hardDeleteClient(id) {
    return await clientRepository.hardDeleteClient(id);
}

module.exports = {
    createClient,
    updateClient,
    findClientById,
    findClientsByAddressLocality,
    findClientsByPostalCode,
    softDeleteClient,
    hardDeleteClient
};
