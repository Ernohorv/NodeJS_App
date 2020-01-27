const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThingSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    number: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('thing', ThingSchema);