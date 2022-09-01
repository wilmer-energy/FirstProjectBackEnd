const { app } = require("./app");
const { db } = require("./utils/dataBase.utils");

const startServer = async function () {
  try {
    await db.authenticate();
    console.log("Data base autenticated"); //--> Finalizar con la conexión de la base de datos
    await db.sync();
    console.log("Data base synced");
    app.listen(4000, () => {}); //--> poner a escuchar el servidor
  } catch {
    console.log("error trying to start the server");
  }
};
startServer();
