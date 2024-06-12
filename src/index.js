const express = require('express');
const connectDB = require('./helpers/db');
const routes = require('./routes');
const setupSwagger = require('./swagger.js');

const app = express();

// Conecte-se ao MongoDBs
connectDB();

// Middlewares
app.use(express.json());
setupSwagger(app);

// Rotas
app.use('/api', routes);

// Porta do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));