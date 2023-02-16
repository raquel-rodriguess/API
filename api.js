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
 app.get("/", function(req,res){
    res.render("home")
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

app.listen(6728, function(){
    console.log("Servidor 6728 rodando") 
})
