const { Cliente, Endereco } = require("../../models");
const bcrypt = require("bcrypt");
const CadastroController = {
  cadastroView: (requisicao, response) => {
    return response.render("cadastro.ejs");
  },
  criar: async (requisicao, response) => {
    let {
      nome,
      telefone,
      CPF,
      email,
      senha,
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
    } = requisicao.body;
    let senhaBcrypt = await bcrypt.hashSync(senha, 12);
    let endereco = await Endereco.create({
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
    });
    let cliente = await Cliente.create({
      fk_endereco: endereco.pk_id_endereco,
      nome,
      telefone,
      cpf: CPF,
      email,
      senha: senhaBcrypt,
    });
    return response.send(cliente);
  },
};

// Visualizar a variavel CadastroController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = CadastroController;
