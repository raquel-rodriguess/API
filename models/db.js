
const Sequelize = require('sequelize');
const sequelize = new Sequelize('PostApi','root','0087',{
    host: "localhost",
    dialect:"mysql"
})
//exportando sequelize 
module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}