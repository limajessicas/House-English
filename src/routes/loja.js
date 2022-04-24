var express = require("express");
var router = express.Router();
var LojaController = require("../controllers/LojaController");

/* GET loja page - rota da tela loja. */
router.get("/", LojaController.lojaView);

// Visualizar a variavel router no projeto
module.exports = router;
