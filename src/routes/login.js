var express = require("express");
var router = express.Router();
var LoginContoller = require("../controllers/LoginController");

/* GET login page - rota da tela login. */
router.get("/", LoginContoller.loginView);
router.post("/logar", LoginContoller.logar);
// Visualizar a variavel router no projeto
module.exports = router;
