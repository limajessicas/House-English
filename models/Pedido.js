const Cliente = require("./Cliente");
const Itens_produto = require("./Itens_produto");

module.exports = (sequelize, DataType) => {
  const Pedido = sequelize.define(
    "Pedido",
    {
      pk_id_pedido: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fk_id_cliente: {
        type: DataType.INTEGER,
        references: {
          model: Cliente,
          key: "pk_id_cliente",
        },
      },
      fk_id_itens_pedidos: {
        type: DataType.INTEGER,
        references: {
          model: Itens_produto,
          key: "pk_id_itens_pedidos",
        },
      },
      total: DataType.DECIMAL,
      status: DataType.STRING,
    },
    {
      tableName: "pedido",
      timestamps: false,
    }
  );
  return Pedido;
};
/* banco de dados <> sequelize*(como foi criada cada tabela do banco de dados)*/
