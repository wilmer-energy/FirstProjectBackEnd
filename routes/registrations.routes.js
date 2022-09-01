const express = require("express");
const resitrationsRoutes = express.Router();
const {
  getRegistrations,
  createRegistration,
  getIdRegistration,
  updateRegistration,
  deleteRegistration,
} = require("../controllers/registration.controller");

resitrationsRoutes.post("/", createRegistration);
resitrationsRoutes.get("/", getRegistrations);
resitrationsRoutes.get("/:id", getIdRegistration);
resitrationsRoutes.patch("/:id", updateRegistration);
resitrationsRoutes.delete("/:id", deleteRegistration);
resitrationsRoutes.all("*");

module.exports = { resitrationsRoutes };
