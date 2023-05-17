import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('node', 'root', '11111111', {
     host: 'localhost',
     dialect: "mysql"
 });