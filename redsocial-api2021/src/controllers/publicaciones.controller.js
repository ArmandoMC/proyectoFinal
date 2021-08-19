const conexion = require("./conexionDB");
const helper = require("../helper");

const publicaciones = {};

publicaciones.getpublicaciones = async (req, res) => {
  let id = req.params.id_provincia;
  const response = await helper.balancear_carga(
    id,
    "SELECT * FROM publicacion INNER JOIN usuario on publicacion.id_usuario = usuario.id_usuario  order by publicacion.id_pub DESC"
  );
  res.status(200).json(response.rows);
};

publicaciones.getpublicacion = async (req, res) => {
  const id = req.params.id_pub;
  let id_provincia = req.params.id_provincia;
  const response = await helper.balancear_carga(
    id_provincia,
    `SELECT * FROM publicacion INNER JOIN usuario on publicacion.id_usuario = usuario.id_usuario where id_pub = ${id} order by publicacion.id_pub DESC`
  );
  res.status(200).json(response.rows);
};

publicaciones.registro = async (req, res) => {
  const { fecha_bub, id_usuario } = req.body;
  if (!isNaN(id_usuario)) {
    let query = `INSERT INTO public.publicacion(fecha_bub, id_usuario) VALUES ('${helper.convertirFecha(
      fecha_bub
    )}','${id_usuario}')`;
    console.log(query);
    await conexion.query(query);
    const result = await conexion.query(
      "SELECT  MAX(id_pub) FROM publicacion LIMIT 1"
    );
    const id = result.rows[0].max;
    res.status(200).json(id);
  }
};
publicaciones.delete = async (req, res) => {
  const id = req.params.id_pub;
  let query = `delete from publicacion where id_pub = ${id}`;
  let qmultimedia = `delete from multimedia_publicacion where id_pub = ${id}`;
  console.log("entro");
  await conexion.query(qmultimedia);
  await conexion.query(query);
  res.status(200).json("Publicacion eliminada con exito");
};
module.exports = publicaciones;
