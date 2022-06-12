DROP DATABASE IF EXISTS helpers_db;

create database helpers_db;

use helpers_db;

create table profiles (
id int(10) unsigned auto_increment not null,
name varchar(100) not null,
primary key (id)
);

create table users (
id int(10) unsigned auto_increment not null,
first_name varchar(100) not null,
last_name varchar(100) not null,
phone bigint not null,
email varchar(200) not null,
password varchar(200) not null,
perfil_id int unsigned not null,
field_name varchar(200),
original_name varchar(200),
encoding varchar(100),
mimetype varchar(100),
destination varchar(200),
path varchar(200),
size bigint,
primary key (id),
foreign key (perfil_id) references profiles(id)
);


create table oficios (
id int(10) unsigned auto_increment not null,
name varchar(100) not null,
image varchar(300) not null,
usa_seguro tinyint not null,
primary key (id)
);

create table helpers (
id int(10) unsigned auto_increment not null,
calle varchar(100) not null,
numero int not null,
barrio varchar(100) not null,
provincia varchar(100) not null,
codigo_postal int not null,
mas_buscados tinyint not null,
anos_de_experiencia tinyint not null,
tarifa int not null,
descripcion varchar(1000) not null,
usuario_id int unsigned not null,
oficio_id int unsigned not null,
primary key (id),
foreign key (usuario_id) references users(id),
foreign key (oficio_id) references oficios(id)
);

