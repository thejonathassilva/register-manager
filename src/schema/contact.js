'use-strict'

const mongoose = require('mongoose');

let ContactSchema = mongoose.Schema({
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
}, { _id: false});

module.exports = ContactSchema;