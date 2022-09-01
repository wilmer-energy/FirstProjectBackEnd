console.log("Hola mundo");

const express = require("express");
const app = express();
const { resitrationsRoutes } = require("./routes/registrations.routes");

app.use(express.json()); //habilidar la base de datos para recevir JSON
app.use("/api/v1/registrations", resitrationsRoutes);
module.exports = { app };
