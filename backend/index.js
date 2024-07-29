import express from "express";
import cors from "cors";

// ACTIVAMOS LAS VARIABLES GLOBALES DE CONFIGURACION 
import 'dotenv/config';

// CREAMOS EL OBJETO APP

const app = express();
app.use(cors());

// RUTA ESTATICA CON EXPRESS
app.use(express.static('public'))

// app.get('/', (req, res) => {

//     res.status(200).send({
//         status: true
//     })
// })


// INICIAMOS EL SERVER
app.listen(process.env.PORT, () => {
    console.log(`Exitoso Server running in ${process.env.PORT}`)
})