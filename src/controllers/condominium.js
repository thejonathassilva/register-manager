const condominiumService = require('../services/condominium');

async function createCondominium(req, res) {
    try {
        const newCondominium = await condominiumService.createCondominium(req.body);
        res.status(201).json(newCondominium);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateCondominium(req, res) {
    try {
        const updatedCondominium = await condominiumService.updateCondominium(req.params.id, req.body);
        res.status(200).json(updatedCondominium);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findCondominiumById(req, res) {
    try {
        const condominium = await condominiumService.findCondominiumById(req.params.id);
        res.status(200).json(condominium);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findCondominiumByAddressLocality(req, res) {
    try {
        const condominiums = await condominiumService.findCondominiumByAddressLocality(req.params.locality);
        res.status(200).json(condominiums);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findCondominiumByPostalCode(req, res) {
    try {
        const condominiums = await condominiumService.findCondominiumByPostalCode(req.params.postalCode);
        res.status(200).json(condominiums);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function softDeleteCondominium(req, res) {
    try {
        const deletedCondominium = await condominiumService.softDeleteCondominium(req.params.id);
        res.status(200).json(deletedCondominium);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function hardDeleteCondominium(req, res) {
    try {
        await condominiumService.hardDeleteCondominium(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
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
