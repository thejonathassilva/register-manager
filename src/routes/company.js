const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company');

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
 *     Activity:
 *       type: object
 *       properties:
 *         atividade_principal:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               text:
 *                 type: string
 *         atividades_secundarias:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               text:
 *                 type: string
 *     Company:
 *       type: object
 *       required:
 *         - companyName
 *         - CNPJ
 *         - taxId
 *         - password
 *         - address
 *         - contact
 *       properties:
 *         companyName:
 *           type: string
 *         CNPJ:
 *           type: string
 *         taxId:
 *           type: string
 *         password:
 *           type: string
 *         providedServices:
 *           type: array
 *           items:
 *             type: string
 *         address:
 *           $ref: '#/components/schemas/Address'
 *         contact:
 *           $ref: '#/components/schemas/Contact'
 *         activity:
 *           $ref: '#/components/schemas/Activity'
 *         accreditationNumber:
 *           type: string
 *         accreditationDate:
 *           type: string
 *           format: date
 *         validUntil:
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
 *           type: boolean
 */

/**
 * @swagger
 * /company:
 *   post:
 *     summary: Cria uma nova empresa
 *     tags: [Company]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Company'
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.post('/', companyController.createCompany);

/**
 * @swagger
 * /company/{id}:
 *   put:
 *     summary: Atualiza uma empresa existente
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da empresa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Company'
 *     responses:
 *       200:
 *         description: Empresa atualizada com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.put('/:id', companyController.updateCompany);

/**
 * @swagger
 * /company/{id}:
 *   get:
 *     summary: Busca uma empresa por ID
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da empresa
 *     responses:
 *       200:
 *         description: Empresa encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *       500:
 *         description: Erro no servidor
 */
router.get('/:id', companyController.findCompanyById);

/**
 * @swagger
 * /company/cnpj/{cnpj}:
 *   get:
 *     summary: Busca uma empresa por CNPJ
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: cnpj
 *         schema:
 *           type: string
 *         required: true
 *         description: CNPJ da empresa
 *     responses:
 *       200:
 *         description: Empresa encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *       500:
 *         description: Erro no servidor
 */
router.get('/cnpj/:cnpj', companyController.findCompanyByCNPJ);

/**
 * @swagger
 * /company/activity/{activity}:
 *   get:
 *     summary: Busca empresas por atividade
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: activity
 *         schema:
 *           type: string
 *         required: true
 *         description: Atividade da empresa
 *     responses:
 *       200:
 *         description: Empresas encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Company'
 *       500:
 *         description: Erro no servidor
 */
router.get('/activity/:activity', companyController.findCompaniesByActivity);

/**
 * @swagger
 * /company/postalCode/{postalCode}:
 *   get:
 *     summary: Busca empresas por código postal
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: postalCode
 *         schema:
 *           type: string
 *         required: true
 *         description: Código postal da empresa
 *     responses:
 *       200:
 *         description: Empresas encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Company'
 *       500:
 *         description: Erro no servidor
 */
router.get('/postalCode/:postalCode', companyController.findCompaniesByPostalCode);

/**
 * @swagger
 * /company/active/{isActive}:
 *   get:
 *     summary: Busca empresas por status ativo
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: isActive
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Status ativo da empresa
 *     responses:
 *       200:
 *         description: Empresas encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Company'
 *       500:
 *         description: Erro no servidor
 */
router.get('/active/:isActive', companyController.findCompaniesByActiveStatus);

/**
 * @swagger
 * /company/soft/{id}:
 *   delete:
 *     summary: Deleta uma empresa (soft delete)
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da empresa
 *     responses:
 *       200:
 *         description: Empresa deletada (soft delete)
 *       500:
 *         description: Erro no servidor
 */
router.delete('/soft/:id', companyController.softDeleteCompany);

/**
 * @swagger
 * /company/hard/{id}:
 *   delete:
 *     summary: Deleta uma empresa (hard delete)
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da empresa
 *     responses:
 *       204:
 *         description: Empresa deletada (hard delete)
 *       500:
 *         description: Erro no servidor
 */
router.delete('/hard/:id', companyController.hardDeleteCompany);

module.exports = router;
