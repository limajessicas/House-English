const PerfilController = {
  perfilView: (requisicao, response) => {
    return response.render("perfil.ejs");
  },
};

// Visualizar a variavel PerfilController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = PerfilController;
