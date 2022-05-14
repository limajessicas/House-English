const HomeController = {
  homeView: (requisicao, response) => {
    return response.render("home.ejs", { usuario: requisicao.session.usuario });
  },
};

// Visualizar a variavel HomeController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = HomeController;
