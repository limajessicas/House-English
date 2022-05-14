/* cria o banco de dados house english */
CREATE SCHEMA `houseEnglish` DEFAULT CHARACTER SET utf8mb4;

/* conecta com o schemas/banco de dados */
use houseEnglish;

/* cria tabela de endereço*/
CREATE TABLE endereco (
    pk_id_endereco int NOT NULL AUTO_INCREMENT, /* chave primaria (primary key) da tabela endereço*/
    cep varchar(255),
    rua varchar(255),
    numero int,
    complemento varchar(255),
    bairro varchar(255),
    cidade varchar(255),
    estado varchar(255),
    PRIMARY KEY (pk_id_endereco)/* aqui eu defini que a coluna pk_id_endereco é a chave primaria (primary key) da tabela endereço*/
);

select *from endereco; 

CREATE TABLE cliente (
    pk_id_cliente int NOT NULL AUTO_INCREMENT,
    fk_endereco int,
    nome varchar(255) NOT NULL,
    telefone VARCHAR(11) NOT NULL,
    cpf varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    senha varchar(255) NOT NULL,
    PRIMARY KEY (pk_id_cliente),/*  A coluna PK_id_cliente é definida como chave primaria.A chave primaria é um registro/dado unico que nao pode se repetir.*/
    FOREIGN KEY (fk_endereco) REFERENCES endereco(pk_id_endereco)/*aqui estou referenciando a minha coluna fk_endereco da minha tabela cliente com a coluna pk_id_endereco da tabela endereço*/
);

select *from cliente;

select *from endereco;

delete from cliente where pk_id_cliente>=0;
delete from endereco where pk_id_endereco=3;
CREATE TABLE produto (
    pk_id_produto int NOT NULL AUTO_INCREMENT,
    nome varchar(255),
    nome_imagem varchar(255),
    valor double,
    PRIMARY KEY (pk_id_produto)
);

select *from produto;
delete from produto where pk_id_produto=9;

insert into produto(nome,nome_imagem, valor) 
values('Caneta Tradutora','caneta-tradutora.jpg', 199.99);
insert into produto(nome,nome_imagem, valor) 
values('Caneca Friends','caneca.jpeg', 39.99);
insert into produto(nome,nome_imagem, valor) 
values('Kit Livros Cambridge','livros.jpeg', 299.99);
insert into produto(nome,nome_imagem, valor) 
values('Livro Ilustrado','livro-ilustrado.jpeg', 79.99);
insert into produto(nome,nome_imagem, valor) 
values('Planner','planner.jpeg', 89.99);
insert into produto(nome,nome_imagem, valor) 
values('365 atividades em Inglês','atividades.jpeg', 149.99);
insert into produto(nome,nome_imagem, valor) 
values('Livro 50 aulas em Ingles','50-aulas-ingles.jpeg', 99.99);

select *from produto; /*o *seleciona/mostra todas as colunas da tabela*/

CREATE TABLE pedido (
    pk_id_pedido int NOT NULL AUTO_INCREMENT,
    fk_id_cliente int NOT NULL,
    total double,
    status varchar(255),
    PRIMARY KEY (pk_id_pedido),
	FOREIGN KEY (fk_id_cliente) REFERENCES cliente(pk_id_cliente)
);

select *from pedido;

CREATE TABLE itens_pedidos (
    pk_id_itens_pedidos int NOT NULL AUTO_INCREMENT,
    fk_id_pedido int,
	fk_id_produto int,
    quantidade int,
    PRIMARY KEY (pk_id_itens_pedidos),
	FOREIGN KEY (fk_id_pedido) REFERENCES pedido(pk_id_pedido),
	FOREIGN KEY (fk_id_produto) REFERENCES produto(pk_id_produto)
);

select *from itens_pedidos;

ALTER TABLE pedido
ADD fk_id_itens_pedidos int;

select *from pedido;

ALTER TABLE pedido ADD FOREIGN KEY (fk_id_itens_pedidos) REFERENCES itens_pedidos(pk_id_itens_pedidos);

select *from pedido;	