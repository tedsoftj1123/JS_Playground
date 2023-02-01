import { getRepository } from "typeorm";
import { User } from "../entity/user.entity";

export const UserRepository = getRepository(User).extend({
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