const Employee = require('../models/employee');
const Company = require('../models/company');

async function createEmployee(employeeData) {
    const employee = new Employee(employeeData);
    const savedEmployee = await employee.save();

    await Company.findByIdAndUpdate(employeeData.company, {
        $push: { employees: savedEmployee._id }
    });

    return savedEmployee;
}

async function updateEmployee(id, employeeData) {
    return await Employee.findByIdAndUpdate(id, employeeData, { new: true });
}

async function findEmployeeById(id) {
    return await Employee.findById(id);
}

async function findEmployeesByCompanyId(companyId) {
    return await Employee.find({ company: companyId });
}

async function findEmployeesByPermissionsAndCompanyId(permissions, companyId) {
    return await Employee.find({
        company: companyId,
        permissions: { $in: permissions }
    });
}

async function findEmployeeByCPF(cpf) {
    return await Employee.findOne({ CPF: cpf });
}

async function softDeleteEmployee(id) {
    const deletionDate = new Date();
    deletionDate.setMonth(deletionDate.getMonth() + 1);
    return await Employee.findByIdAndUpdate(id, { isActive: false, deletionDate }, { new: true });
}

async function hardDeleteEmployee(id) {
    return await Employee.findByIdAndDelete(id);
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
