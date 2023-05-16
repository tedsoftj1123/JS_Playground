import { DataSource } from "typeorm";

export const dataSource = new DataSource({
     type: "mysql",
     host: "localhost",
     port: 3306,
     username: "root",
     password: "11111111",
     database: "express",
     entities: [],
     logging: true,
     synchronize: true,
});