const mongoose = require('mongoose');
const { hashPassword } = require('../helpers/hashHelper');
const { isValidCPF } = require('../helpers/validation');
const ContactSchema = require('../schema/contact');
const AddressSchema = require('../schema/address');

const EmployeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    CPF: { 
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                return isValidCPF(v);
            },
            message: props => `${props.value} is not a valid CPF!`
        }
    },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'company', required: true },
    address: { type: AddressSchema, required: true },
    contact: { type: ContactSchema, required: true },
    permissions: { type: [String], required: true },
    position: { type: String },
    department: { type: String },
    hireDate: { type: Date },
    status: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }
});

EmployeeSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        this.password = await hashPassword(this.password);
    }
    next();
});

module.exports = mongoose.model('employee', EmployeeSchema);
