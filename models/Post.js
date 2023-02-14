
//guarda todos os dados inseridos
//gerando tabelas
const db = require("./db");

const Post = db.sequelize.define('Postagens',{
  titulo:{
    type:db.Sequelize.STRING
},
   conteudo:{
    type:db.Sequelize.TEXT
},
})
module.exports = Post
 //Post.sync({force: true})
