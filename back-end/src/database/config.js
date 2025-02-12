import { Sequelize } from "sequelize";

const dataBase = new Sequelize('volunteers', 'root', 'A19551947b',{
    host:"localhost" ,
    dialect:"mysql"
}) 

export {dataBase}