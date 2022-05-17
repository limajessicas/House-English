const Pedido = require("./Pedido");
const Produto = require("./Produto");

module.exports = (sequelize, DataType) => {
  const Itens_pedidos = sequelize.define(
    "Itens_pedidos",
    {
      pk_id_itens_pedidos: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fk_id_pedido: {
        type: DataType.INTEGER,
        references: {
          model: Pedido,
          key: "fk_id_pedido",
        },
      },
      fk_id_produto: {
        type: DataType.INTEGER,
        references: {
          model: Produto,
          key: "fk_id_produto",
        },
      },
      quantidade: {
        type: DataType.INTEGER,
      },
    },
    {
      tableName: "itens_pedidos",
      timestamps: false,
    }
  );
  return Itens_pedidos;
};
/* banco de dados <> sequelize*(como foi criada cada tabela do banco de dados)*/
