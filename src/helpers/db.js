'use-strict';

const mongoose = require('mongoose');
const rs = require('./readSecret');

async function connectDB() {
    try {
        let connectionString = process.env.DB_CONNECTION_STRING
          .replace('{{username}}', rs.getMongoUser())
          .replace('{{password}}', rs.getMongoPasswd());

          
        await mongoose.connect(connectionString, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
        console.log('Conectado ao MongoDB');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
}

module.exports = connectDB;
