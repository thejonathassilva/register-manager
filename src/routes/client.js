const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client');

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
 *     Client:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - dateOfBirth
 *         - gender
 *         - username
 *         - CPF
 *         - password
 *         - address
 *         - contact
 *         - condominium
 *       properties:
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         dateOfBirth:
 *           type: string
 *           format: date
 *         gender:
 *           type: string
 *         username:
 *           type: string
 *         CPF:
 *           type: string
 *         password:
 *           type: string
 *         address:
 *           $ref: '#/components/schemas/Address'
 *         contact:
 *           $ref: '#/components/schemas/Contact'
 *         condominium:
 *           type: string
 *           format: uuid
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
 * /client:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Client]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.post('/', clientController.createClient);

/**
 * @swagger
 * /client/{id}:
 *   put:
 *     summary: Atualiza um cliente existente
 *     tags: [Client]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.put('/:id', clientController.updateClient);

/**
 * @swagger
 * /client/{id}:
 *   get:
 *     summary: Busca um cliente por ID
 *     tags: [Client]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       500:
 *         description: Erro no servidor
 */
router.get('/:id', clientController.findClientById);

/**
 * @swagger
 * /client/locality/{locality}:
 *   get:
 *     summary: Busca clientes por localidade
 *     tags: [Client]
 *     parameters:
 *       - in: path
 *         name: locality
 *         schema:
 *           type: string
 *         required: true
 *         description: Localidade do cliente
 *     responses:
 *       200:
 *         description: Clientes encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 *       500:
 *         description: Erro no servidor
 */
router.get('/locality/:locality', clientController.findClientsByAddressLocality);

/**
 * @swagger
 * /client/postalCode/{postalCode}:
 *   get:
 *     summary: Busca clientes por código postal
 *     tags: [Client]
 *     parameters:
 *       - in: path
 *         name: postalCode
 *         schema:
 *           type: string
 *         required: true
 *         description: Código postal do cliente
 *     responses:
 *       200:
 *         description: Clientes encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 *       500:
 *         description: Erro no servidor
 */
router.get('/postalCode/:postalCode', clientController.findClientsByPostalCode);

/**
 * @swagger
 * /client/soft/{id}:
 *   delete:
 *     summary: Deleta um cliente (soft delete)
 *     tags: [Client]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do cliente
 *     responses:
 *       200:
 *         description: Cliente deletado (soft delete)
 *       500:
 *         description: Erro no servidor
 */
router.delete('/soft/:id', clientController.softDeleteClient);

/**
 * @swagger
 * /client/hard/{id}:
 *   delete:
 *     summary: Deleta um cliente (hard delete)
 *     tags: [Client]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do cliente
 *     responses:
 *       204:
 *         description: Cliente deletado (hard delete)
 *       500:
 *         description: Erro no servidor
 */
router.delete('/hard/:id', clientController.hardDeleteClient);

module.exports = router;
