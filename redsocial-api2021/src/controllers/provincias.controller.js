const conexion = require("./conexionDB");
const provincias = {};
provincias.getprovincias = async (req, res) => {
  const response = await conexion.query("select *from provincia");
  res.status(200).json(response.rows);
};
module.exports = provincias;
