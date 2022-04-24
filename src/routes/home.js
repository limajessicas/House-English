var express = require("express");
var router = express.Router();
var HomeController = require("../controllers/HomeController");

/* GET home page - rota da tela home. */
router.get("/", HomeController.homeView);

// Visualizar a variavel router no projeto.
module.exports = router;
