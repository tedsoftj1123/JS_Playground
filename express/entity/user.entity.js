import { DataTypes, Model, Sequelize } from "sequelize"

export class User extends Sequelize.Model {
     static initiate(sequelize) {
         User.init({
               id: {
                    type : DataTypes.INTEGER,
                    primaryKey : true,
                    autoIncrement : true
               },
             accountId: {
                 type : Sequelize.STRING(20),
                 allowNull : false,
                 unique : true
             },
             password : {
                 type : Sequelize.STRING(40),
                 allowNull : false
             },
             name : {
                 type : Sequelize.STRING(10),
                 allowNull : false
             },
             createdAt : {
                 type : Sequelize.TIME,
                 allowNull : false,
                 defaultValue : Sequelize.NOW
             }
         }, {
             sequelize,
             timestamps : false,
             underscored : true,
             modelName : 'User',
             tableName : 'user',
             paranoid : false
         });
     }
 }