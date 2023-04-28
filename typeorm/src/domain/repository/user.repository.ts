import { connection } from "../../loader/db.connection";
import { User } from "../entity/user.entity";

const entity: string = "user";
const baseRepository = connection.getRepository(User);
export const userRepository = baseRepository.extend({

    existsByAccountId(accountId: string): Promise<boolean> {
        return baseRepository.exist(
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
        return baseRepository.find()
    }
 });