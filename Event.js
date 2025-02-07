const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        enum: ['workshops', 'sports', 'academic'], 
        required: true
    },
    registeredUsers: {
        type: [String], 
        default: []
    }
});

module.exports = mongoose.model('Event', eventSchema);
