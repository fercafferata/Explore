const express = require('express');
const app = express();

const excursion = require('./routes/excursion');
//const hotel = require('./routes/hotel');
//const pais = require('./routes/pais');
//const tipo_paquete = require('./routes/tipo_paquete');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/excursion",excursion);
//app.use("/hotel",hotel);
//app.use("/pais",pais);
//app.use("/tipo",tipo_paquete);


app.listen(4000);
console.log('Server on port 4000');
