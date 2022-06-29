const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);


const getTipo_paq = async (req, res)=> {
  const response = await pool.query('SELECT * FROM tipo_paquete')
  res.status(200).json(response.rows);
}

const getTipo_paqById = async(req,res)=> {
    const id = req.params.id;
    console.log('id',id)
    const response = await pool.query('SELECT * FROM hotel WHERE tipo_paquete = $1', [id])
    res.json(response.rows);
};





module.exports = {
    getTipo_paq,
    getTipo_paqById

}