const TrainingModel = require('../model/trainingModel');
const CommonUtil = require('../utils/common-util');

async function getTrainings(req, res) {
  const trainings = await TrainingModel.find({});

  res.send({ data: trainings });
}

async function getTraining(req, res) {
  const { id } = req.params;
  const training = await TrainingModel.findOne({ _id: id });

  res.send({ data: training });
}

async function createTraining(req, res) {
  const {
    trainingName,
    instructorName,
    schedule,
    price,
    openSeats,
  } = req.body;

  const training = await TrainingModel.create({
    trainingName, instructorName, schedule, price, openSeats,
  });

  res.send({ data: training  });
}

async function deleteTraining(req, res) {
  const { id } = req.params;
  try {
    await TrainingModel.deleteOne({ _id: id });
    res.send({ data: { _id: id }});
  } catch (error) {
    console.log(error);
  }
}

async function updateTraining(req, res) {
  const { id } = req.params;
  const {
    trainingName, instructorName, schedule, price, openSeats,
  } = req.body;

  const updateData = CommonUtil.removeUndefinedKeys({
    trainingName, instructorName, schedule, price, openSeats,
  });

  await TrainingModel.updateOne({ _id: id }, updateData);
  res.send({ data: { _id: id } });
}

module.exports = {
  getTrainings,
  getTraining,
  createTraining,
  deleteTraining,
  updateTraining,
};
