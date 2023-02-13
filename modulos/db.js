
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test','root','6728',{
    host: "localhost",
    dialect:"mysql"
})
//exportando sequelize 
module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}