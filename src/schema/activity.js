'use-strict'

const { Schema } = require('mongoose');

let ActivitySchema = Schema({
  main_activity: [{
      code: String,
      text: String
  }],
  secundary_activity: [{
      code: String,
      text: String
  }]
}, { _id: false});

module.exports = ActivitySchema;