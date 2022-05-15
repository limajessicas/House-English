const { Produto, Itens_pedidos, Pedido } = require("../../models");

const CarrinhoController = {
  carrinhoView: async (requisicao, response) => {
    let { id } = requisicao.params;

    let produtoSelecionado = await Produto.findOne({
      where: { pk_id_produto: `${id}` },
    });

    return response.render("carrinho.ejs", {
      usuario: requisicao.session.usuario,
      pedido: produtoSelecionado,
    });
  },
  comprar: async (requisicao, response) => {
    let { idProduto, quantidade } = requisicao.body;

    let produtoComprado = await Produto.findOne({
      where: { pk_id_produto: parseInt(idProduto) },
    });

    let total = produtoComprado.valor * quantidade;
    let pedido = await Pedido.create({
      fk_id_cliente: requisicao.session.usuario.pk_id_cliente,
      total: total,
      status: "Concluido",
    });

    let itemDoPedido = await Itens_pedidos.create({
      fk_id_pedido: pedido.pk_id_pedido,
      fk_id_produto: produtoComprado.pk_id_produto,
      quantidade: quantidade,
    });

    await Pedido.update(
      {
        fk_id_itens_pedidos: itemDoPedido.pk_id_itens_pedidos,
      },
      { where: { pk_id_pedido: itemDoPedido.fk_id_pedido } }
    );
    return response.redirect("/realizado");
  },
};

// Visualizar a variavel CarrinhoController no projeto.
//sempre devo exportar module.exports="nome da variavel"
module.exports = CarrinhoController;
