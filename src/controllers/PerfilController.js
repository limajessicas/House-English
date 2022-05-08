const bcrypt = require("bcrypt");
const res = require("express/lib/response");
const { Cliente, Endereco } = require("../../models");

const PerfilController = {
  perfilView: async (requisicao, response) => {
    let { id } = requisicao.params;
    let cliente = await Cliente.findOne({
      where: { pk_id_cliente: id },
    });
    let endereco = await Endereco.findOne({
      where: { pk_id_endereco: cliente.fk_endereco },
    });
    return response.render("perfil.ejs", { myEnd: endereco, myCli: cliente });
    //return response.render("perfil.ejs");
  },
  update: async (requisicao, response) => {
    let {
      id_cliente,
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
    let cliente = await Cliente.update(
      {
        nome: `${nome}`,
        cpf: `${cpf}`,
        telefone: `${telefone}`,
        email: `${email}`,
        senha: `${senhaBcrypt}`,
      },
      { where: { pk_id_cliente: findCliente.pk_id_cliente } }
    );
    let endereco = await Endereco.update(
      {
        cep: `${cep}`,
        rua: `${rua}`,
        numero: `${numero}`,
        complemento: `${complemento}`,
        bairro: `${bairro}`,
        cidade: `${cidade}`,
        estado: `${estado}`,
      },
      { where: { pk_id_endereco: findCliente.fk_endereco } }
    );
    return response.send("sucesso fii");
  },
  delete: async (requisicao, response) => {
    let { id } = requisicao.params;
    let findCliente = await Cliente.findOne({
      where: { pk_id_cliente: parseInt(id) },
    });
    await Cliente.destroy({ where: { pk_id_cliente: parseInt(id) } });
    await Endereco.destroy({
      where: { pk_id_endereco: findCliente.fk_endereco },
    });
    return response.redirect("/");
  },
};

// Visualizar a variavel PerfilController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = PerfilController;
