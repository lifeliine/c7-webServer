require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT; //generalmente se define antes el puerto porque lo decide otra area

app.use(express.static(__dirname + '/public'));


app.get('/', function(req,res) {
    res.send('Hola mundo!');
});


app.get('/usuarios', function(req,res) {
    res.send('Usuario: Matias');
});

app.post('/',function(req,res) {
    res.send('POST del path /');

});

app.listen(port, () => {
    console.log(`Server started - Port ${port}`) //asi avisamos que se ejecuta
});