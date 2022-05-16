const bcrypt = require("bcrypt");
const { Cliente } = require("../../models");
const LoginController = {
  loginView: (requisicao, response) => {
    return response.render("login.ejs");
  },
  logar: async (requisicao, response) => {
    let { email, senha, logado } = requisicao.body;
    /* informaçoes do atributo name do HTML/EJS */
    let cliente = await Cliente.findOne({ where: { email: `${email}` } });
    /* informaçoes buscadas no banco de dados*/
    requisicao.session.usuario = cliente;
    /* atribuir o email a sessao para visualizar o nome do perfil do usuario logado*/

    if (cliente != undefined) {
      /* verificando se o cliente existe ou não no banco de dados*/
      if (cliente.email === email && bcrypt.compareSync(senha, cliente.senha)) {
        if (logado != undefined) {
          response.cookie("logado", cliente.email, { maxAge: 60000 });
          /* se estiver marcado "menter logado", criará  o cookie  */
        }
        return response.redirect("/");
        /* se estiver no banco de dados, redireciona com para home com o nome do usuario */
      }
    } else {
      return response.send("E-mail ou senha invalida");
    }
  },
};

// Visualizar a variavel LoginController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = LoginController;
