const conexion = require("../src/controllers/conexionDB");
const conexionMysql = require("../src/controllers/conexionMysql");
const helper = {};
helper.balancear_carga = async (id, sql) => {
  let servidores = [
    { servidor: 2, id_provincia: 1 },
    { servidor: 2, id_provincia: 2 },
    { servidor: 2, id_provincia: 3 },
    { servidor: 2, id_provincia: 4 },
    { servidor: 2, id_provincia: 5 },
    { servidor: 2, id_provincia: 6 },
    { servidor: 1, id_provincia: 7 },
    { servidor: 1, id_provincia: 8 },
    { servidor: 2, id_provincia: 9 },
    { servidor: 1, id_provincia: 10 },
    { servidor: 2, id_provincia: 11 },
    { servidor: 2, id_provincia: 12 },
    { servidor: 1, id_provincia: 13 },
    { servidor: 1, id_provincia: 14 },
    { servidor: 2, id_provincia: 15 },
    { servidor: 2, id_provincia: 16 },
    { servidor: 2, id_provincia: 17 },
    { servidor: 2, id_provincia: 18 },
    { servidor: 2, id_provincia: 19 },
    { servidor: 1, id_provincia: 20 },
    { servidor: 2, id_provincia: 21 },
    { servidor: 2, id_provincia: 22 },
    { servidor: 2, id_provincia: 23 },
    { servidor: 2, id_provincia: 24 },
  ];
  let provincia = id;
  const servidor = servidores.find(
    (element) => element.id_provincia == provincia
  );
  id_servidor = servidor.servidor;
  switch (id_servidor) {
    case 1:
      return await conexion.query(sql);
      break;
    case 2:
      return conexionMysql.query(sql);
      conexionMysql.destroy();
      break;
  }
};
helper.convertirFecha = (fecha) => {
  var nFecha = new Date(fecha);
  let dia = nFecha.getDate();
  let mes = nFecha.getMonth();
  let anio = nFecha.getFullYear();
  let hora = nFecha.getHours();
  let minutos = nFecha.getMinutes();
  let segundos = nFecha.getSeconds();
  let diaCnv = "";
  let mesCnv = "";
  if (mes < 10) {
    mesCnv = "0" + mes;
    if (dia < 10) {
      diaCnv = "0" + dia;
    } else {
      diaCnv = dia.toString();
    }
  } else {
    mesCnv = mes.toString();
  }
  return (
    anio +
    "-" +
    mesCnv +
    "-" +
    dia +
    " " +
    hora +
    ":" +
    minutos +
    ":" +
    segundos
  );
};

module.exports = helper;
