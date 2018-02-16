// Contato.js
var mongoose = require('mongoose');

// Cria um novo Schema com os campos que iremos utilizar no model Contato
var ContatoSchema = new mongoose.Schema({
  nome: String,
  categoria: String,
  sinopse: String,
  youtube: String,
  poster: String,
  imagem1: String,
  imagem2: String,
  imagem3: String,
  store: String,
  idf: Number,
});

//Define o model Contato
mongoose.model('Contato', ContatoSchema);
