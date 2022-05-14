const bcrypt = require("bcrypt");
const { Cliente } = require("../../models");
const LoginController = {
  loginView: (requisicao, response) => {
    return response.render("login.ejs");
  },
  logar: async (requisicao, response) => {
    let { email, senha, logado } = requisicao.body;
    let cliente = await Cliente.findOne({ where: { email: `${email}` } });
    requisicao.session.usuario = cliente;

    if (cliente != undefined) {
      if (cliente.email === email && bcrypt.compareSync(senha, cliente.senha)) {
        if (logado != undefined) {
          response.cookie("logado", cliente.email, { maxAge: 60000 });
        }
        return response.redirect("/");
      }
    } else {
      return response.send("E-mail ou senha invalida");
    }
  },
};

// Visualizar a variavel LoginController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = LoginController;
