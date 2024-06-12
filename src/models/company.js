'use-strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const axios = require('axios');
const ContactSchema = require('../schema/contact');
const AddressSchema = require('../schema/address');
const ActivitySchema = require('../schema/activity');
const { hashPassword } = require('../helpers/hashHelper');
const { isValidCNPJ } = require('../helpers/validation');
const { CNPJDataNotFoundError } = require('../helpers/exception');

const CompanySchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    CNPJ: { type: String, required: true, unique: true, validate: {
      validator: function(v) {
          return isValidCNPJ(v);
      },
      message: props => `${props.value} is not a valid CNPJ!`
  }
},
    taxId: { type: String, required: true },
    password: { type: String, required: true },
    providedServices: { type: [String], default: [] },
    address: { type: AddressSchema, required: true },
    contact: { type: ContactSchema, required: true },
    activity: { type: ActivitySchema },
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'employee' }],
    accreditationNumber: { type: String },
    accreditationDate: { type: Date },
    validUntil: { type: Date },
    status: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }
});

CompanySchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
      this.password = await hashPassword(this.password);
    }

    if (this.isNew) {
        try {
            const response = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${this.CNPJ}`);
            if(!response.data) {
                throw new CNPJDataNotFoundError();
            }
            const data = response.data;
            this.activity = {
                main_activity: data.atividade_principal,
                secundary_activity: data.atividades_secundarias
            };
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

module.exports = mongoose.model('company', CompanySchema);
