import express, { Application, Request, Response } from 'express';
import { DataSource } from 'typeorm';
import { UserRepository } from './entity/repository/user.repository';
import { User } from './entity/user.entity';

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
export const userOrmRepository = datasource.getRepository(User);

datasource.initialize()
     .then(() => console.log("database connected"))
     .catch((err) => {
          console.error(err);
          process.exit(1);
     });
const userRepository = new UserRepository();

app.get('/users', async (req: Request, res: Response)=> {
     const users = await userRepository.findByAccountIdAndName(
          req.query.accountId as string,
          req.query.name as string
     );

     res.json(users);
});

app.listen(3000, () => {
     console.log('listening on port 3000');
});