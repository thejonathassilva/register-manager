'use-strict'

const mongoose = require('mongoose');

let AddressSchema = new mongoose.Schema({
  street: String,
  number: String,
  complement: String,
  city: String,
  state: String,
  postalCode: String,
  locality: String,
  country: String
});

module.exports.schema = AddressSchema;