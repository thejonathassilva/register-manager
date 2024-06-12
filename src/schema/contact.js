'use-strict'

const mongoose = require('mongoose');

let ContactSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  url: String,
  whatsApp: Boolean
});

module.exports.schema = ContactSchema;