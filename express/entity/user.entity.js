import { DataTypes, Model } from "sequelize"
import { sequelize } from "../config/sequelize.config.js";

export class User extends Model {
     static initiate(sequelize) {
         User.init({
               id: {
                    type : DataTypes.INTEGER,
                    primaryKey : true,
                    autoIncrement : true
               },
               accountId: {
                    type : DataTypes.STRING(20),
                    allowNull : false,
                    unique : true
               },
               password : {
                    type : DataTypes.STRING(40),
                    allowNull : false
               },
               name : {
                    type : DataTypes.STRING(10),
                    allowNull : false
               },
               createdAt : {
                    type : DataTypes.TIME,
                    allowNull : false,
                    defaultValue : DataTypes.NOW
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

 User.initiate(sequelize);