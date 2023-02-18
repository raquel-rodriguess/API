const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const Post = require("./models/Post")
//config
// template engine
app.engine( 'handlebars', handlebars.engine ({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Configurando biblioteca para receber os dados do formulário
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//rotas 
//pagigina do formulário
app.get('/cad',function(req,res){
    res.render('formulario')
})
//rota para receber dados inseridos no formulário
//app.post('/receber',function(req,res){
   // res.send('texto: ' + req.body.titulo + "  conteudo "  + req.body.conteudo)
//})

//rota para rederecionar apõs cadastro ocorrido com sucesso
 //app.get("/", function(req,res){
   // res.render("home")
 //})

 //Exibindo dados da tabela postagem no navegador
 app.get("/",function(req,res){
    Post.findAll({order:[["id", "DESC"]]}).then(function (dados) {
        res.render("home", {dados: dados})
    })
 })

app.post("/receber", function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
       res.send("Houve um erro: " + erro)
    })
}) 
//Deletando dados
 app.get("/deletar/:id", function(req , res){
    Post.destroy({where: {"id":req.params.id}}).then(function(){
        res.send("Dado deletado com sucesso!")
    }).catch(function(erro){
        res.send("Esse dado não existe!")
    })
 })

app.listen(6728, function(){
    console.log("Servidor 6728 rodando") 
})
