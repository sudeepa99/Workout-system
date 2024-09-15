const mongoose = require('mongoose')

const Schema = mongoose.Schema

//schema defines the structure of a document
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: String,
        required: true
    },
    load: {
        type: String,
        required: true
    }
},{timestamps: true})

//timestamps record when the document is created or last modified.

module.exports = mongoose.model('Workout', workoutSchema)