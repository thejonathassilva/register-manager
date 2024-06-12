const employeeRepository = require('../repositories/employee');

async function createEmployee(employeeData) {
    return await employeeRepository.createEmployee(employeeData);
}

async function updateEmployee(id, employeeData) {
    return await employeeRepository.updateEmployee(id, employeeData);
}

async function findEmployeeById(id) {
    return await employeeRepository.findEmployeeById(id);
}

async function findEmployeesByCompanyId(companyId) {
    return await employeeRepository.findEmployeesByCompanyId(companyId);
}

async function findEmployeesByPermissionsAndCompanyId(permissions, companyId) {
    return await employeeRepository.findEmployeesByPermissionsAndCompanyId(permissions, companyId);
}

async function findEmployeeByCPF(cpf) {
    return await employeeRepository.findEmployeeByCPF(cpf);
}

async function softDeleteEmployee(id) {
    return await employeeRepository.softDeleteEmployee(id);
}

async function hardDeleteEmployee(id) {
    return await employeeRepository.hardDeleteEmployee(id);
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
