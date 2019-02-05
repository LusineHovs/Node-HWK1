const trainingModel = require('../model/trainingModel');

async function getTrainings(req, res){
    const trainings  = await trainingModel.find({});
    res.send({data:trainings});
}

async function getTraining(req, res){
    const{id} = req.params;
    const training = await trainingModel.findOne({_id: id});
    res.send({training});
}

async function createTraining(req, res){
    const{trainingName, instructorName, schedule:{date, topic}, price, openSeats} = req.body;
    const training = await trainingModel.create({trainingName, instructorName, schedule:{date, topic}, price, openSeats});
    res.send({training});
}

async function deleteTraining(req, res) {
   const {id} = req.params;
   await trainingModel._deleteOne({_id: id});
   res.send({_id: id});
}

async function updateTraining(req, res){
    const{trainingName, instructorName, schedule:{date, topic}, price, openSeats} = req.body;
    await trainingModel._updateOne({trainingName, instructorName, schedule:{date, topic}, price, openSeats});
    res.send({trainingName});
}
module.exports = {
    getTrainings,
    getTraining,
    createTraining,
    deleteTraining,
    updateTraining
};
