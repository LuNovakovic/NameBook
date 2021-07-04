const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String
    },
});

module.exports = mongoose.model('contact', ContactSchema);