const express = require("express");
const app = express();
const Sequelize = require('sequelize');
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
//config
// template engine
app.engine( 'handlebars', handlebars.engine ({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Configurando biblioteca para receber os dados do formulário
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//conexão com banco de dados mysql
const sequelize = new Sequelize('test','root','6728',{
    host: "localhost",
    dialect:"mysql"
})
//rotas
app.get('/cad',function(req,res){
    res.render('formulario')
})
//rota para receber dados inseridos no formulário
app.post('/receber',function(req,res){
    res.send('texto: ' + req.body.titulo + "  conteudo "  + req.body.conteudo)
})

app.listen(6728, function(){
    console.log("Servidor 6728 rodando") 
})

