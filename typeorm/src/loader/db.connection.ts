import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Post } from '../domain/entity/post.entity';
import { User } from '../domain/entity/user.entity';
require('dotenv').config();

export const connection = new DataSource({
     type: "mysql",
     host: process.env.DB_HOST,
     port: +process.env.DB_PORT,
     username: process.env.DB_USERNAME,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME,
     synchronize: true,
     logging: true,
     entities: [
          User, Post
     ]
});