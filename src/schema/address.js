'use-strict'

const { Schema } = require('mongoose');

let AddressSchema = Schema({
  street: String,
  StreetNumber: String,
  complement: String,
  city: String,
  state: String,
  postalCode: String,
  neighborhood: String,
  country: String,
  geocode: {
    lng: { type: Number, min: -180, max: 180 },
    lat: { type: Number, min: -90, max: 90 },
    source: String
  }
});

module.exports = AddressSchema;