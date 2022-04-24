var express = require("express");
var router = express.Router();
var PerfilController = require("../controllers/PerfilController");

/* GET perfil page - rota da tela de perfil. */
router.get("/", PerfilController.perfilView);

// Visualizar a variavel router no projeto.
module.exports = router;
