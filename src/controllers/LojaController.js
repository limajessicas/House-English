const LojaController = {
  lojaView: (requisicao, response) => {
    let produtosItem = [
      {
        id: 1,
        nome: "Caneca Friends",
        valor: 39.99,
        imagem: "images/caneca.jpeg",
      },
      {
        id: 2,
        nome: "Kit Livros Cambridge",
        valor: 299.99,
        imagem: "images/livros.jpeg",
      },
      {
        id: 3,
        nome: "Livro Ilustrado",
        valor: 79.99,
        imagem: "images/livro-ilustrado.jpeg",
      },
      {
        id: 4,
        nome: "Planner",
        valor: 89.99,
        imagem: "images/planner.jpeg",
      },
      {
        id: 5,
        nome: "Caneta Tradutora",
        valor: 199.99,
        imagem: "images/caneta-tradutora.jpg ",
      },
    ];
    return response.render("loja.ejs", { listaProdutos: produtosItem });
  },
};

// Visualizar a variavel LojaController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = LojaController;
