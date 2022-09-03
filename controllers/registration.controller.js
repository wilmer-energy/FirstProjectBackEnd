const { employee } = require("../models/registrations.model");

const getRegistrations = async function (req, res) {
  try {
    const registrations = await employee.findAll();
    res.status(200).json({
      status: "success to download registrations",
      data: { registrations },
    });
  } catch {
    console.log("Unable to download the employee registrations");
  }

  res.end();
};
const getIdRegistration = async function (req, res) {
  try {
    const { id } = req.params;
    const {dayFiltered} = req
    res.status(200).json({
      status: `success to download the registration for the id: ${id}`,
      data: { dayFiltered },
    });
  } catch {
    console.log("Unable to find the registration");
  }
};
const createRegistration = async function (req, res) {
  try {
    //get the data
    const { entranceTime } = req.body;
    console.log(entranceTime);
    //create user
    const newRegistration = await employee.create({ entranceTime });
    res.status(202).json({
      status: "succes to create the new registration",
      body: { newRegistration },
    });
  } catch {
    console.log("unable to create the new registration");
  }
};
const updateRegistration = async function (req, res) {
  try {
    //get the leaving date and id
    console.log("---------------------------in");
    const { id } = req.params;
    const { exitTime } = req.body;

    //search the registration to update
    const updated = await employee.findOne({ where: { id } });
    updated.update({ exitTime, status: "out" });
    res.status(202).json({
      status: "Success to log out",
      data: { updated },
    });
  } catch {
    console.log("unable to update");
  }
};
const deleteRegistration = async function (req, res) {
  try {
    //get id
    const { id } = req.params;
    const deleted = await employee.findOne({ where: { id } });
    await deleted.update({ status: "cancelled" });
    res.status(202).json({
      status: "succes to cancell the registration",
      body: { deleted },
    });
  } catch {}
};

module.exports = {
  getRegistrations,
  getIdRegistration,
  createRegistration,
  updateRegistration,
  deleteRegistration,
};
