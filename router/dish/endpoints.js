const express = require('express');
const router = express.Router();

const { findAll, findByName, updateDish, deleteDish }  = require('./controller')

//Configuración de cada una de las rutas con sus respectivos métodos
router.get('/findAll', findAll);
router.get('/find', findByName);
router.patch('/update', updateDish)
router.delete('/delete/:id', deleteDish)

module.exports = router;  