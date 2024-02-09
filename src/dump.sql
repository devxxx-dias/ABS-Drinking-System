
create database abs;


create table pedidos (
  id serial primary key,
  bebida text not null,
  copo text not null,
  tamanho text not null,
  gelo text,
  entrega text not null,
  Tampa text not null,
  data_criacao date default current_date
  );


