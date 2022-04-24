const HomeController = {
  homeView: (requisicao, response) => {
    return response.render("home.ejs");
  },
};

// Visualizar a variavel HomeController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = HomeController;
