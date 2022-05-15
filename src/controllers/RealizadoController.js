const RealizadoController = {
  realizadoView: async (requisicao, response) => {
    return response.render("realizado.ejs", {
      usuario: requisicao.session.usuario,
    });
  },
};

// Visualizar a variavel LojaController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = RealizadoController;
