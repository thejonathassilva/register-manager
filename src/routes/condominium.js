const express = require('express');
const router = express.Router();
const condominiumController = require('../controllers/condominium');

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
 *     Condominium:
 *       type: object
 *       required:
 *         - name
 *         - CNPJ
 *         - password
 *         - address
 *         - contact
 *       properties:
 *         name:
 *           type: string
 *         CNPJ:
 *           type: string
 *         password:
 *           type: string
 *         plan:
 *           type: string
 *           default: free
 *         address:
 *           $ref: '#/components/schemas/Address'
 *         contact:
 *           $ref: '#/components/schemas/Contact'
 */

/**
 * @swagger
 * /condominium:
 *   post:
 *     summary: Cria um novo condomínio
 *     tags: [Condominium]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Condominium'
 *     responses:
 *       201:
 *         description: Condomínio criado com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.post('/', condominiumController.createCondominium);

/**
 * @swagger
 * /condominium/{id}:
 *   put:
 *     summary: Atualiza um condomínio existente
 *     tags: [Condominium]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do condomínio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Condominium'
 *     responses:
 *       200:
 *         description: Condomínio atualizado com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.put('/:id', condominiumController.updateCondominium);

/**
 * @swagger
 * /condominium/{id}:
 *   get:
 *     summary: Busca um condomínio por ID
 *     tags: [Condominium]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do condomínio
 *     responses:
 *       200:
 *         description: Condomínio encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Condominium'
 *       500:
 *         description: Erro no servidor
 */
router.get('/:id', condominiumController.findCondominiumById);

/**
 * @swagger
 * /condominium/locality/{locality}:
 *   get:
 *     summary: Busca condomínios por localidade
 *     tags: [Condominium]
 *     parameters:
 *       - in: path
 *         name: locality
 *         schema:
 *           type: string
 *         required: true
 *         description: Localidade do condomínio
 *     responses:
 *       200:
 *         description: Condomínios encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Condominium'
 *       500:
 *         description: Erro no servidor
 */
router.get('/locality/:locality', condominiumController.findCondominiumByAddressLocality);

/**
 * @swagger
 * /condominium/postalCode/{postalCode}:
 *   get:
 *     summary: Busca condomínios por código postal
 *     tags: [Condominium]
 *     parameters:
 *       - in: path
 *         name: postalCode
 *         schema:
 *           type: string
 *         required: true
 *         description: Código postal do condomínio
 *     responses:
 *       200:
 *         description: Condomínios encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Condominium'
 *       500:
 *         description: Erro no servidor
 */
router.get('/postalCode/:postalCode', condominiumController.findCondominiumByPostalCode);

/**
 * @swagger
 * /condominium/soft/{id}:
 *   delete:
 *     summary: Deleta um condomínio (soft delete)
 *     tags: [Condominium]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do condomínio
 *     responses:
 *       200:
 *         description: Condomínio deletado (soft delete)
 *       500:
 *         description: Erro no servidor
 */
router.delete('/soft/:id', condominiumController.softDeleteCondominium);

/**
 * @swagger
 * /condominium/hard/{id}:
 *   delete:
 *     summary: Deleta um condomínio (hard delete)
 *     tags: [Condominium]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do condomínio
 *     responses:
 *       204:
 *         description: Condomínio deletado (hard delete)
 *       500:
 *         description: Erro no servidor
 */
router.delete('/hard/:id', condominiumController.hardDeleteCondominium);

module.exports = router;
