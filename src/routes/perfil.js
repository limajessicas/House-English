var express = require("express");
var router = express.Router();
var PerfilController = require("../controllers/PerfilController");

/* GET perfil page - rota da tela de perfil. */
router.get("/:id", PerfilController.perfilView);
router.put("/update", PerfilController.update);
router.delete("/delete/:id", PerfilController.delete);

// Visualizar a variavel router no projeto.
module.exports = router;
