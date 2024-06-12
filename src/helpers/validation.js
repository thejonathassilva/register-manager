const { validate: validateCPF } = require('gerador-validador-cpf');

async function isValidCNPJ(cnpjNumber) {
    const { validate } = await import('cnpj');
    // Adiciona a formatação correta do CNPJ
    const formattedCNPJ = cnpjNumber.replace(/[^\d]+/g, '');
    return validate(formattedCNPJ);
}

function isValidCPF(cpf) {
    return validateCPF(cpf);
}

module.exports = {
    isValidCPF,
    isValidCNPJ
};
