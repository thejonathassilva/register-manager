'use-strict'

const clientService = require('../services/client');

async function createClient(req, res) {
    try {
        const client = await clientService.createClient(req.body);
        res.status(201).json(client);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateClient(req, res) {
    try {
        const client = await clientService.updateClient(req.params.id, req.body);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findClientById(req, res) {
    try {
        const client = await clientService.findClientById(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findClientsByAddressLocality(req, res) {
    try {
        const clients = await clientService.findClientsByAddressLocality(req.params.locality);
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findClientsByPostalCode(req, res) {
    try {
        const clients = await clientService.findClientsByPostalCode(req.params.postalCode);
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function softDeleteClient(req, res) {
    try {
        const client = await clientService.softDeleteClient(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function hardDeleteClient(req, res) {
    try {
        await clientService.hardDeleteClient(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
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
