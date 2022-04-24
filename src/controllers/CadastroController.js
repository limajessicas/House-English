const CadastroController = {
  cadastroView: (requisicao, response) => {
    return response.render("cadastro.ejs");
  },
};

// Visualizar a variavel CadastroController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = CadastroController;
