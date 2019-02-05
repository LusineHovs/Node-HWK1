const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainingSchema = new  Schema({
    trainingName: String,
    instructorName: String,
    schedule: [{
        date: Date,
        topic: String
    }],
    price: String,
    openSeats: Number
});

const TrainingModel = mongoose.model('Trainings', TrainingSchema);

module.exports = TrainingModel;
