let mysql = require("mysql");
let conexion = mysql.createConnection({
  host: "localhost",
  database: "bd_proyecto_progravii",
  user: "root",
  password: "ligaHer2021**",
});

conexion.connect(function (err) {
  if (err) {
    console.error("Error de conexion: " + err.stack);
    return;
  }
  console.log("Conectado con el identificador " + conexion.threadId);
});

module.exports = conexion;
