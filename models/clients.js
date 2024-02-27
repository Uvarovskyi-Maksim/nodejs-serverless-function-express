const mongoose = require('mongoose');
const crypto = require('crypto');

const clientSchema = new mongoose.Schema({
    clientName:{type: String},
    email: { type: String, unique: true },
    phone: { type: String },
    secondPhone: {type: String},
    role: { type: String, enum: ['client'], default: 'client' },
    managerID:{type: String, unique: false},
    managerKey:{type: String, unique: false},
    status: {type: String, enum:['new', 'in_processing', 'agreed', 'successful', 'return', 'nds','wholesale', 'cancel'  ], default: 'new', unique: 'new'},
    product: {type: String},
    payment:{type: String},
    selectedDate: { type: Date, default: null },
    dateOfCreated: { type: String, default: null }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
