const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const trainingController = require('./controllers/trainingController');
const app = express;
mongoose.connect('mongodb://localhost/Node-HWK1');

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/trainings', trainingController.getTrainings);
app.get('/trainings/:id', trainingController.getTraining);
app.post('/trainings', trainingController.createTraining);
app.patch('trainings/:id', trainingController.updateTraining);
app.delete('trainings/:id', trainingController.deleteTraining);

module.exports = app;
