'use-strict'

const fs = require('fs');
const logger = require('../helpers/logger')

module.exports.getMongoPasswd = () => {
  try {
    if (process.env.DB_MONGO_PASS) {
      return fs
          .readFileSync(process.env.DB_MONGO_PASS)
          .toString()
          .split(/\n/)[0]
          .trim()
          .toString();
    }
  } catch (e) {
    logger.error(e);
  }

  let mongoPass = process.env.MONGODB_SECRET_PATH || '';
  const secretMongoPath = `${mongoPass.replace(/\/*$/, '')}/password`;
  if(process.env.MONGODB_SECRET_PATH && fs.existsSync(secretMongoPath)) {
    mongoPass = (fs.readFileSync(secretMongoPath).toString() || '').trim();
  }
  return mongoPass;
};

module.exports.getMongoUser = () => {
  try {
    if (process.env.DB_MONGO_USER) {
      return fs
          .readFileSync(process.env.DB_MONGO_USER)
          .toString()
          .split(/\n/)[0]
          .trim()
          .toString();
    }
  } catch (e) {
    logger.error(e);
  }

  let mongoPass = process.env.MONGODB_SECRET_PATH || '';
  const secretMongoPath = `${mongoPass.replace(/\/*$/, '')}/username`;
  if(process.env.MONGODB_SECRET_PATH && fs.existsSync(secretMongoPath)) {
    mongoPass = (fs.readFileSync(secretMongoPath).toString() || '').trim();
  }
  return mongoPass;
};