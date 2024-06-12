# Use uma imagem oficial do Node.js como imagem base
FROM node:16.3.0

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json (se houver) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que a aplicação usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
