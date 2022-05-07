var express = require("express");
var router = express.Router();
var CadastroController = require("../controllers/CadastroController");

/* GET cadastro page - rota da tela cadastro. */
router.get("/", CadastroController.cadastroView);

router.post("/criar", CadastroController.criar);

// Visualizar a variavel router no projeto.
module.exports = router;
