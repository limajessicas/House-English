var express = require("express");
var router = express.Router();
var CarrinhoController = require("../controllers/CarrinhoController");

/* GET cadastro page - rota da tela cadastro. */
router.get("/:id", CarrinhoController.carrinhoView);
router.post("/pedido", CarrinhoController.comprar);

// Visualizar a variavel router no projeto.
module.exports = router;
