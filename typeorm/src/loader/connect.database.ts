import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { User } from '../domain/entity/user.entity';
dotenv.config

export const connectDatabase = () => {
     const connection = new DataSource({
          type: "mysql",
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          synchronize: true,
          logging: true,
          entities: [
               'src/domain/entity/*.entity{.ts,.js}'
          ]
     });
     return connection.initialize(); 
}