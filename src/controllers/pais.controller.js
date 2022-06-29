const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);


const getPais = async (req, res)=> {
  const response = await pool.query('SELECT * FROM pais')
  res.status(200).json(response.rows);
}

const createPais = async(req, res)=>{
  console.log(req.body);
  const activo = true;
  const nombre = req.body;
  const response = await pool.query('INSERT INTO pais nombre VALUES $1',[nombre])

  console.log(response);
  //res.send('user created');
  res.json({
      message: 'Pais Added Succesfully' ,
      body:{
      pais:{nombre,activo}
  } 
})
};
//ver eliminar usuario porque tiene el rol 
const deletePais =async (req,res) =>{
  //res.send('USER DELETED'+ req.params.id)
  const nombre= req.params.nombre; 
  //const response = await pool.query('DELETE FROM usuario WHERE dni =$1', [id])
  console.log('nombre',nombre)
  const response = await pool.query('UPDATE pais SET activo = false WHERE nombre =$1',[nombre]);
  console.log(response);
  res.json(`Pais ${nombre} deleted successfully`);
};



module.exports = {
    getPais,
    createPais,
    deletePais

}