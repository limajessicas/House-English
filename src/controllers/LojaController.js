const LojaController = {
  lojaView: (requisicao, response) => {
    let produtosItem = [
      {
        id: 1,
        nome: "Caneta Tradutora",
        valor: 199.99,
        imagem: "images/caneta.jpg",
      },
      {
        id: 2,
        nome: "b",
        valor: 199.99,
        imagem: "images/caneta.jpg",
      },
    ];
    return response.render("loja.ejs", { listaProdutos: produtosItem });
  },
};

// Visualizar a variavel LojaController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = LojaController;
