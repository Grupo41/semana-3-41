const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');
const bodyParser = require ('body-parser');

//instancia de express en mi app
const app = express();

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST, DELETE");
    next();
})

//middleware morgan para detectar peticiones
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//primera ruta
app.use('/api', apiRouter);

app.set('PORT', 3000);

app.listen(app.get('PORT'), ()=>{
    console.log ('server up');
});