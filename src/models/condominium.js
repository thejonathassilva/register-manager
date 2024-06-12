const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const ContactSchema = require('../schema/contact');
const AddressSchema = require('../schema/address');
const { hashPassword } = require('../helpers/hashHelper');
const { isValidCNPJ } = require('../helpers/validation');

const CondominiumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    CNPJ: {
        type: String,
        required: true,
        unique: true, 
        validate: {
            validator: function(v) {
                return isValidCNPJ(v);
            },
            message: props => `${props.value} is not a valid CNPJ!`
        }
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
        this.password = await hashPassword(this.password);
        next();
    } catch (err) {
        next(err);
    }
});

const Condominium = mongoose.model('condominium', CondominiumSchema);

module.exports = Condominium;
