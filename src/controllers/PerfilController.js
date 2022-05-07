const bcrypt = require("bcrypt");
const { Cliente, Endereco } = require("../../models");

const PerfilController = {
  perfilView: async (requisicao, response) => {
    let { id } = requisicao.params;
    let cliente = await Cliente.findOne({
      where: { pk_id_cliente: parseInt(id) },
    });
    let endereco = await Endereco.findOne({
      where: { pk_id_endereco: cliente.fk_endereco },
    });
    return response.render("perfil.ejs", { myEnd: endereco, myCli: cliente });
    //return response.render("perfil.ejs");
  },
  update: async (requisicao, response) => {
    let {
      nome,
      cpf,
      telefone,
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
    let findCliente = await Cliente.findOne({
      where: { pk_id_cliente: parseInt(id_cliente) },
    });
  },
  delete: async (requisicao, response) => {},
};

// Visualizar a variavel PerfilController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = PerfilController;
