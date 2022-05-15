var express = require("express");
var router = express.Router();
var RealizadoController = require("../controllers/RealizadoController");

/* GET loja page - rota da tela loja. */
router.get("/", RealizadoController.realizadoView);

// Visualizar a variavel router no projeto
module.exports = router;
