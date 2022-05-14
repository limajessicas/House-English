const { Produto } = require("../../models");
const Sequelize = require("sequelize");

const LojaController = {
  lojaView: async (requisicao, response) => {
    let listaDeProdutos = await Produto.findAll();
    return response.render("loja.ejs", {
      produtos: listaDeProdutos,
      usuario: requisicao.session.usuario,
    });
  },
};

// Visualizar a variavel LojaController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = LojaController;
