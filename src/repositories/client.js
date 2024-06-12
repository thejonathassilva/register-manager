'use-strict'

const Client = require('../models/client');

async function createClient(clientData) {
    const client = new Client(clientData);
    return await client.save();
}

async function updateClient(id, clientData) {
    return await Client.findByIdAndUpdate(id, clientData, { new: true });
}

async function findClientById(id) {
    return await Client.findById(id);
}

async function findClientsByAddressLocality(locality) {
    return await Client.find({ 'address.locality': locality });
}

async function findClientsByPostalCode(postalCode) {
    return await Client.find({ 'address.postalCode': postalCode });
}

async function softDeleteClient(id) {
    const deletionDate = new Date();
    deletionDate.setMonth(deletionDate.getMonth() + 1);
    return await Client.findByIdAndUpdate(id, { isActive: false, deletionDate }, { new: true });
}

async function hardDeleteClient(id) {
    return await Client.findByIdAndDelete(id);
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
