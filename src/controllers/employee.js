const employeeService = require('../services/employee');

async function createEmployee(req, res) {
    try {
        const employee = await employeeService.createEmployee(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateEmployee(req, res) {
    try {
        const employee = await employeeService.updateEmployee(req.params.id, req.body);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findEmployeeById(req, res) {
    try {
        const employee = await employeeService.findEmployeeById(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findEmployeesByCompanyId(req, res) {
    try {
        const employees = await employeeService.findEmployeesByCompanyId(req.params.companyId);
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findEmployeesByPermissionsAndCompanyId(req, res) {
    try {
        const employees = await employeeService.findEmployeesByPermissionsAndCompanyId(req.params.permissions, req.params.companyId);
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function findEmployeeByCPF(req, res) {
    try {
        const employee = await employeeService.findEmployeeByCPF(req.params.cpf);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function softDeleteEmployee(req, res) {
    try {
        const employee = await employeeService.softDeleteEmployee(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function hardDeleteEmployee(req, res) {
    try {
        await employeeService.hardDeleteEmployee(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createEmployee,
    updateEmployee,
    findEmployeeById,
    findEmployeesByCompanyId,
    findEmployeesByPermissionsAndCompanyId,
    findEmployeeByCPF,
    softDeleteEmployee,
    hardDeleteEmployee
};
