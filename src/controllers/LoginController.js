const bcrypt = require("bcrypt");
const { Cliente } = require("../../models");
const LoginController = {
  loginView: (requisicao, response) => {
    return response.render("login.ejs");
  },
  logar: async (requisicao, response) => {
    let { email, senha } = requisicao.body;
    let senhaBcrypt = await Cliente.findOne({ where: { email: `${email}` } });
    if (senhaBcrypt != undefined) {
      if (
        senhaBcrypt.email === email &&
        bcrypt.compareSync(senha, senhaBcrypt.senha)
      ) {
        return response.send("Sucesso!");
      }
    } else {
      return response.send("E-mail ou senha invalida");
    }
  },
};

// Visualizar a variavel LoginController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = LoginController;
