const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000;

//Configuración de las rutas de los endpoints
const dishRouter = require('./router/dish/endpoints')

//Acceder a las variables de entorno
dotenv.config()

//Permite la lectura de JSON
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Se accedes a las rutas del CRUD
app.use('/api/v1/dish', dishRouter);  

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
