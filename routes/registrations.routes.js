const express = require("express");
const resitrationsRoutes = express.Router();
const {
  getRegistrations,
  createRegistration,
  getIdRegistration,
  updateRegistration,
  deleteRegistration,
} = require("../controllers/registration.controller");

const {ValidateUser}=require('../middleware/registrations.middleware')

resitrationsRoutes.post("/", createRegistration);
resitrationsRoutes.get("/", getRegistrations);
resitrationsRoutes.get("/:id",ValidateUser,getIdRegistration);
resitrationsRoutes.patch("/:id",ValidateUser, updateRegistration);
resitrationsRoutes.delete("/:id",ValidateUser, deleteRegistration);
resitrationsRoutes.all("*");

module.exports = { resitrationsRoutes };
