const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const ContactSchema = require('../schema/contact');
const AddressSchema = require('../schema/address');

const CondominiumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    CNPJ: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        default: 'free'
    },
    address: {
        type: AddressSchema,
        required: true
    },
    contact: {
        type: ContactSchema,
        required: true
    },
    deletedAt: {
        type: Date,
        default: null
    }
});

// Middleware para criptografar a senha antes de salvar
CondominiumSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

const Condominium = mongoose.model('condominium', CondominiumSchema);

module.exports = Condominium;
