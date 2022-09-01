const { db, DataTypes } = require("../utils/dataBase.utils");

const employee = db.define("registrations", {
  //--> Crear una nueva tabla (modelo) en Postgres
  id: {
    type: DataTypes.INTEGER, // --> DataTypes sirve como un traductor en el caso de que queramos usar otro motor distinto a Postgres
    primaryKey: true,
    autoIncrement: true,
  },
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false, //--> No permite poner un nombre vacio
  },
  exitTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "working",
  },
});

module.exports = { employee };
