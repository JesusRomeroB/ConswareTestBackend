const connection = require('../../database/database')

//Método para listar todos los platos
const findAll  = async (req, res, next) => {
    try {
      connection.query('SELECT * FROM dish', (error, results) =>{
          if(error){
              throw error;
          }else{
              res.send(results)
          }
      })
    } catch (e) {
      next(e);
    }
}

//Método para buscar un plato por su nombre
const findByName  = async (req, res, next) => {
    try {
      connection.query(`SELECT * FROM dish WHERE name LIKE '%${req.body.name}%'`, (error, results) =>{
          if(error){
              throw error;
          }else{
              res.send(results)
          }
      })
    } catch (e) {
      next(e);
    }
}

//Método para actualizar un plato
const updateDish  = async (req, res, next) => {
    try {
      connection.query(`UPDATE dish SET name = '${req.body.name}', description = '${req.body.description}', value = '${req.body.value}' 
                        WHERE id = '${req.body.id}'`, (error, results) =>{
          if(error){
              throw error;
          }else{
              res.send(results)
          }
      })
    } catch (e) {
      next(e);
    }
}

//Método para eliminar un plato del menú
const deleteDish  = async (req, res, next) => {
    try {
      connection.query(`DELETE FROM dish WHERE id = '${req.params.id}'`, (error, results) =>{
          if(error){
              throw error;
          }else{
              res.send(results)
          }
      })
    } catch (e) {
      next(e);
    }
}

module.exports = {findAll, findByName, updateDish, deleteDish};