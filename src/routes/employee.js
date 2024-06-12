const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee');

/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       properties:
 *         street:
 *           type: string
 *         city:
 *           type: string
 *         state:
 *           type: string
 *         postalCode:
 *           type: string
 *         locality:
 *           type: string
 *     Contact:
 *       type: object
 *       properties:
 *         phone:
 *           type: string
 *         email:
 *           type: string
 *     Employee:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - dateOfBirth
 *         - CPF
 *         - password
 *         - gender
 *         - company
 *         - address
 *         - contact
 *         - permissions
 *       properties:
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         dateOfBirth:
 *           type: string
 *           format: date
 *         CPF:
 *           type: string
 *         password:
 *           type: string
 *         gender:
 *           type: string
 *         company:
 *           type: string
 *           format: uuid
 *         address:
 *           $ref: '#/components/schemas/Address'
 *         contact:
 *           $ref: '#/components/schemas/Contact'
 *         permissions:
 *           type: array
 *           items:
 *             type: string
 *         position:
 *           type: string
 *         department:
 *           type: string
 *         hireDate:
 *           type: string
 *           format: date
 *         status:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         isActive:
 *           type: booleanconst employeeService = require('../services/employee');

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
}const employeeService = require('../services/employee');

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

async function findEmployeeByCPF(req, res) {const employeeService = require('../services/employee');

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

 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       201:
 *         description: Funcionário criado com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.post('/', employeeController.createEmployee);

/**
 * @swagger
 * /employee/{id}:
 *   put:
 *     summary: Atualiza um funcionário existente
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do funcionário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: Funcionário atualizado com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.put('/:id', employeeController.updateEmployee);

/**
 * @swagger
 * /employee/{id}:
 *   get:
 *     summary: Busca um funcionário por ID
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do funcionário
 *     responses:
 *       200:
 *         description: Funcionário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Erro no servidor
 */
router.get('/:id', employeeController.findEmployeeById);

/**
 * @swagger
 * /employee/company/{companyId}:
 *   get:
 *     summary: Busca funcionários por ID da empresa
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: companyId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da empresa
 *     responses:
 *       200:
 *         description: Funcionários encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Erro no servidor
 */
router.get('/company/:companyId', employeeController.findEmployeesByCompanyId);

/**
 * @swagger
 * /employee/permissions/{permissions}/company/{companyId}:
 *   get:
 *     summary: Busca funcionários por permissões e ID da empresa
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: permissions
 *         schema:
 *           type: string
 *         required: true
 *         description: Permissões do funcionário
 *       - in: path
 *         name: companyId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da empresa
 *     responses:
 *       200:
 *         description: Funcionários encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Erro no servidor
 */
router.get('/permissions/:permissions/company/:companyId', employeeController.findEmployeesByPermissionsAndCompanyId);

/**
 * @swagger
 * /employee/cpf/{cpf}:
 *   get:
 *     summary: Busca um funcionário por CPF
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         schema:
 *           type: string
 *         required: true
 *         description: CPF do funcionário
 *     responses:
 *       200:
 *         description: Funcionário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Erro no servidor
 */
router.get('/cpf/:cpf', employeeController.findEmployeeByCPF);

/**
 * @swagger
 * /employee/soft/{id}:
 *   delete:
 *     summary: Deleta um funcionário (soft delete)
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do funcionário
 *     responses:
 *       200:
 *         description: Funcionário deletado (soft delete)
 *       500:
 *         description: Erro no servidor
 */
router.delete('/soft/:id', employeeController.softDeleteEmployee);

/**
 * @swagger
 * /employee/hard/{id}:
 *   delete:
 *     summary: Deleta um funcionário (hard delete)
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do funcionário
 *     responses:
 *       204:
 *         description: Funcionário deletado (hard delete)
 *       500:
 *         description: Erro no servidor
 */
router.delete('/hard/:id', employeeController.hardDeleteEmployee);

module.exports = router;
