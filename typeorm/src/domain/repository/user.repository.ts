import { connection } from "../../loader/db.connection";
import { User } from "../entity/user.entity";

const baseRepositroy = connection.getRepository(User);

export const userRepository = baseRepositroy.extend({
     findByAccountId(accountId: string) {
         return this.createQueryBuilder("user")
             .where("user.accountId = :acccountId", { accountId })
             .getOne()
     },
     findAll() {
        return this.createQueryBuilder("user")
            .getMany();
     }
 });