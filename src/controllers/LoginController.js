const LoginController = {
  loginView: (requisicao, response) => {
    return response.render("login.ejs");
  },
};

// Visualizar a variavel LoginController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = LoginController;
