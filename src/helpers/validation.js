const { validate: validateCPF } = require('gerador-validador-cpf');
const { InvalidCPFError, InvalidCNPJError } = require('./exception');

async function isValidCNPJ(cnpjNumber) {
    const { validate } = await import('cnpj');
    const formattedCNPJ = cnpjNumber.replace(/[^\d]+/g, '');
    if(!validate(formattedCNPJ)) {
        throw new InvalidCNPJError();
    } return true;
}

function isValidCPF(cpf) {
    if(!validateCPF(cpf)) {
        throw new InvalidCPFError();
    }
    return true;
}

module.exports = {
    isValidCPF,
    isValidCNPJ
};
