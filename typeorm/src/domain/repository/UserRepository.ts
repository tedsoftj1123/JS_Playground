import { connection } from "../../loader/db.connection";
import { User } from "../entity/user.entity";

export const UserRepository = connection.getRepository(User).extend({
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