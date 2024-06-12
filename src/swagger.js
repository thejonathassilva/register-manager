const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Condominium API',
            version: '1.0.0',
            description: 'API para gerenciamento de registros'
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: 'Servidor local'
            }
        ]
    },
    apis: ['./routes/*.js', './models/*.js'] // Caminhos para os arquivos de rotas e modelos
};

const swaggerSpec = swaggerJsdoc(options);

function setupSwagger(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
