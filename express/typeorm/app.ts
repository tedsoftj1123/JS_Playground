import express, { Application } from 'express';
import { DataSource } from 'typeorm';

const app: Application = express();


export const datasource = new DataSource({
     type: "mysql",
     host: "localhost",
     port: 3306,
     username: "root",
     password: "11111111",
     database: "typeorm",
     logging: true,
     synchronize: true,
     entities: ['**/entity/*.entity.js']
});

datasource.initialize()
     .then(() => console.log("database connected"))
     .catch((err) => {
          console.error(err);
          process.exit(1);
     });

app.listen(3000, () => {
     console.log('listening on port 3000');
});