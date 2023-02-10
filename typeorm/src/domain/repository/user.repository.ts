import { connection } from "../../loader/db.connection";
import { User } from "../entity/user.entity";

const entity: string = "user";
const baseRepositroy = connection.getRepository(User);
export const userRepository = baseRepositroy.extend({

    existsByAccountId(accountId: string): Promise<boolean> {
        return baseRepositroy.exist(
            {
                where: { "accountId" : accountId }
            }
        )
    },
    findByAccountId(accountId: string): Promise<User> {
        return this.createQueryBuilder(entity)
        .where("account_id = :accountId", {accountId})
        .getOne();
    },
    findAll(): Promise<User[]> {
        return baseRepositroy.find()    
    }
 });