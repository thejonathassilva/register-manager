class InvalidCPFError extends Error {
  constructor(message = 'Invalid CPF') {
      super(message);
      this.name = 'InvalidCPFError';
  }
}

class InvalidCNPJError extends Error {
  constructor(message = 'Invalid CNPJ') {
      super(message);
      this.name = 'InvalidCNPJError';
  }
}

class UsernameTakenError extends Error {
  constructor(message = 'Username already taken') {
      super(message);
      this.name = 'UsernameTakenError';
  }
}

class CNPJDataNotFoundError extends Error {
  constructor(message = 'CNPJ data not found in Receita Federal') {
      super(message);
      this.name = 'CNPJDataNotFoundError';
  }
}

module.exports = {
  InvalidCPFError,
  InvalidCNPJError,
  UsernameTakenError,
  CNPJDataNotFoundError
};
