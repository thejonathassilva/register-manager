'use-strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ContactSchema = require('../schema/contact');
const AddressSchema = require('../schema/address');
const { hashPassword } = require('../helpers/hashHelper');
const { isValidCPF } = require('../helpers/validation');

const ClientSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    CPF: { type: String, required: true, unique: true, validate: {
        validator: function(v) {
            return isValidCPF(v);
        },
        message: props => `${props.value} is not a valid CPF!`
    }
},
    password: { type: String, required: true },
    condominium: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'condominium', 
      required: true 
    },
    address: { type: AddressSchema, required: true },
    contact: { type: ContactSchema, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }
});

ClientSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        this.password = await hashPassword(this.password);
    }
    next();
});

module.exports = mongoose.model('client', ClientSchema);
