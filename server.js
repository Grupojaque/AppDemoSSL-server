var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());


// El puerto donde escuchamos
var port = process.env.PORT || 8080;

// Ruta únicamente para verificar que el servidor está online
app.get('/', function(req, res) {
  res.json({
    success: "true",
    message: "Conectado correctamente al servidor"
  });
});

// Aquí recibimos la información y logueamos en la consola
app.post('/create', function(req, res) {
  console.log(req.body);

  res.json({
    success: true,
    message: "Recibimos tu información :)"
  });
});

app.listen(port, function() {
  console.log("Escuchando en el puerto " + port);
});
